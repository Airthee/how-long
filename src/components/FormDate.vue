<template>
  <div>
    
    <div class="current-time">
      <div class="current-time--date">{{ formattedDate(currDate) }}</div>
      <div class="current-time--time">{{ formattedTime(currDate) }}</div>
    </div>

    <div class="date-form">
      <div class="columns is-centered">
        <div class="column is-8">
          <table class="date-form--table">
            <tr>
              <td class="date-form--table--td-datetime">
                <datetime 
                  input-class="input-datetime input"
                  v-model="inputDateTimeValue" 
                  type="datetime" 
                  :auto="true" 
                  :flow="['year', 'date', 'time']"
                ></datetime>
              </td>
              <td class="date-form--table--td-icon">
                <button type="button" class="button" :title="$t('formDate.titleButtonReset')" @click="resetDate">
                  <span class="icon">
                    <i class="fas fa-redo"></i>
                  </span>
                </button>
              </td>
              <td class="date-form--table--td-description">
                <span :title="$t('formDate.dateDescription.title')" @click="showModalEditionDescription">
                  {{ description ? description : $t('formDate.dateDescription.defaultValue') }}
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

    <div class="diff-time" v-if="displayDiffTime">
      <div class="diff-time--text">
        {{ $t('formDate.elapsedTime') }} : 
        <span class="diff-time--text-result">
          <span v-if="diffTime.years || diffTime.months || diffTime.days || diffTime.hours || diffTime.minutes || diffTime.seconds">
            <span v-if="diffTime.years > 0">{{ $tc('formDate.year', diffTime.years) }}</span>
            <span v-if="diffTime.months > 0">{{ $tc('formDate.month', diffTime.months) }}</span>
            <span v-if="diffTime.days > 0">{{ $tc('formDate.day', diffTime.days) }}</span>
            <span v-if="diffTime.hours > 0">{{ $tc('formDate.hour', diffTime.hours) }}</span>
            <span v-if="diffTime.minutes > 0">{{ $tc('formDate.minute', diffTime.minutes) }}</span>
            <span v-if="diffTime.seconds > 0">{{ $tc('formDate.second', diffTime.seconds) }}</span>
          </span>
          <span v-else>
            {{ $tc('formDate.second', diffTime.seconds) }}
          </span>
        </span>.
      </div>
    </div>
    <div v-else>
      {{ $t('formDate.loading') }}...
    </div>

    <modal-edit-description
      :class="{'is-active': modalDescription.display}"
      :fDescriptionValue="() => description"
      @close="onModalEditDescriptionClose"
      @validate="onModalEditDescriptionValidate"
    ></modal-edit-description>
  </div>
</template>

<script>
import { setInterval } from "timers";
import ModalEditDescription from './ModalEditDescription';

let initDate = new Date();
let isResetDate = false;

export default {
  name: "form-date",
  components: { ModalEditDescription },
  data() {
    return {
      inputDateTimeValue: localStorage.hasOwnProperty('selectedDateTime') ? JSON.parse(localStorage.getItem('selectedDateTime')) : (new Date()).toISOString(),
      currDate: new Date(),
      displayDiffTime: false,
      description: localStorage.getItem('dateDescription'),
      modalDescription: {
        display: false,
      }
    };
  },
  watch: {
    inputDateTimeValue(newValue) {
      if (isResetDate) {
        isResetDate = false;
      }
      else {
        // Persist date to localstorage
        this.persistToLocalStorage('selectedDateTime', newValue ? JSON.stringify(newValue) : null);
      }
    }
  },
  mounted() {
    // Update currDate every seconds
    setInterval(() => {
      this.currDate = new Date();
      if (!this.displayDiffTime) {
        this.displayDiffTime = true;
      }
    }, 1000);

    // Create style
    const style = document.createElement('style');
    style.innerHTML = `
      .diff-time .diff-time--text .diff-time--text-result span:last-child:not(:first-child)::before {
        content: ' ${this.$t('words.and')} '
      }
    `;
    document.querySelector('head').insertAdjacentElement('beforeend', style);
  },
  computed: {
    diffTime() {
      const returnDiff = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      const inputDateTime = new Date(this.inputDateTimeValue);
      const selectedDate = new Date(
        inputDateTime.getFullYear() || initDate.getFullYear(),
        inputDateTime.getMonth() || initDate.getMonth(),
        inputDateTime.getDate() || initDate.getDate(),
        inputDateTime.getHours() || initDate.getHours(),
        inputDateTime.getMinutes() || initDate.getMinutes(),
        inputDateTime.getSeconds() || initDate.getSeconds(),
      );

      // Seconds
      returnDiff.seconds += this.currDate.getSeconds() - selectedDate.getSeconds();
      if (returnDiff.seconds < 0) {
        returnDiff.seconds += 60;
        returnDiff.minutes--;
      }

      // Minutes
      returnDiff.minutes += this.currDate.getMinutes() - selectedDate.getMinutes();
      if (returnDiff.minutes < 0) {
        returnDiff.minutes += 60;
        returnDiff.hours--;
      }

      // Hours
      returnDiff.hours += this.currDate.getHours() - selectedDate.getHours();
      if (returnDiff.hours < 0) {
        returnDiff.hours += 24;
        returnDiff.days--;
      }

      // Days
      returnDiff.days += this.currDate.getDate() - selectedDate.getDate();
      if (returnDiff.days < 0) {
        returnDiff.days += 31;
        returnDiff.months--;
      }

      // Months
      returnDiff.months += this.currDate.getMonth() - selectedDate.getMonth();
      if (returnDiff.months < 0) {
        returnDiff.months += 12;
        returnDiff.years--;
      }

      // Years
      returnDiff.years += this.currDate.getFullYear() - selectedDate.getFullYear();
      if (returnDiff.years < 0) {
        returnDiff.years = 0;
      }

      return returnDiff;
    },
  },
  methods: {
    formattedDate(date) {
      return `${this.zeroPad(date.getDate())}/${this.zeroPad(date.getMonth() + 1)}/${date.getFullYear()}`;
    },
    formattedTime(date) {
      return `${this.zeroPad(date.getHours())}:${this.zeroPad(date.getMinutes())}:${this.zeroPad(date.getSeconds())}`;
    },
    zeroPad(number, pad = 2) {
      return number.toString().padStart(pad, '0');
    },
    persistToLocalStorage(name, value) {
      if (value) {
        localStorage.setItem(name, value);
      }
      else {
        localStorage.removeItem(name)
      }
    },
    resetDate() {
      if (this.displayDiffTime) {
        this.displayDiffTime = false;
      }
      isResetDate = true;
      localStorage.removeItem('selectedDateTime');
      localStorage.removeItem('dateDescription');
      this.inputDateTimeValue = (new Date()).toISOString();
      this.description = null;
    },
    showModalEditionDescription() {
      this.modalDescription.display = true;
    },
    onModalEditDescriptionClose() {
      this.modalDescription.display = false;
    },
    onModalEditDescriptionValidate(value) {
      this.description = value;
      this.persistToLocalStorage('dateDescription', value);
    }
  }
};
</script>

<style lang="scss" scoped>
  .current-time {
    width: 150px;
    margin: auto;
    border: 1px solid;
    padding: 10px 0;
    margin-bottom: 50px;
  }

  .date-form {
    margin-bottom: 50px;
    *:not(:last-child) {
      margin-right: 10px;
    }
    input {
      text-align: center;
      width: 4em;
    }

    .date-form--table {
      td {
        border: none;
        vertical-align: middle;
      }

      .date-form--table--td-datetime {
        margin-right: 0;
        padding-right: 0;
   
        input.vdatetime-input.input-datetime.input {
          border-radius: 5px 0 0 5px !important;
        }
      }

      .date-form--table--td-icon {
        vertical-align: middle;
        margin-left: 0;
        padding-left: 0;
        margin-right: 0;

        &>button:first-child {
          border-radius: 0 5px 5px 0;
        }
      }


      .date-form--table--td-description {
        vertical-align: middle;
        margin-left: 0;
        padding-left: 0;
        font-style: italic;

        &>span:first-child {
          cursor: pointer;
        }
      }
    }
  }

  .diff-time {
    .diff-time--text {
      .diff-time--text-result {
        span:nth-child(n+2):not(:last-child)::before {
          content: ', ';
        }
      }
    }
  }
</style>
