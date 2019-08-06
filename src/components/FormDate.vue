<template>
  <div>
    
    <div class="current-time">
      <div class="current-time--date">{{ formattedDate(currDate) }}</div>
      <div class="current-time--time">{{ formattedTime(currDate) }}</div>
    </div>

    <div class="birth-form">
      <input type="number" v-model="days" placeholder="DD" min="01" max="31" title="Day" />
      <span>/</span>
      <input type="number" v-model="month" placeholder="MM" min="01" max="12" title="Month" />
      <span>/</span>
      <input type="number" v-model="year" placeholder="YYYY" min="1900" :max="currDate.getFullYear()" title="Year" />
      <span>@</span>
      <input type="number" v-model="hour" placeholder="hh" min="00" max="23" title="Hour" />
      <span>:</span>
      <input type="number" v-model="minute" placeholder="mm" min="00" max="59" title="Minute" />
      <span>:</span>
      <input type="number" v-model="second" placeholder="ss" min="00" max="59" title="Second" />
    </div>

    <div class="diff-time">
      <div class="diff-time--text">
        Vous avez 
        <span class="diff-time--text-result">
          <span v-if="diffTime.years > 0">{{ `${diffTime.years} ${diffTime.years > 1 ? 'ans' : 'an'}` }}</span>
          <span v-if="diffTime.months > 0">{{ diffTime.months }} mois</span>
          <span v-if="diffTime.days > 0">{{ `${diffTime.days} ${diffTime.days > 1 ? 'jours' : 'jour'}` }}</span>
          <span v-if="diffTime.hours > 0">{{ `${diffTime.hours} ${diffTime.hours > 1 ? 'heures' : 'heure'}` }}</span>
          <span v-if="diffTime.minutes > 0">{{ `${diffTime.minutes} ${diffTime.minutes > 1 ? 'minutes' : 'minute'}` }}</span>
          <span v-if="diffTime.seconds > 0">{{ `${diffTime.seconds} ${diffTime.seconds > 1 ? 'secondes' : 'seconde'}` }}</span>
        </span>.
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
import _ from 'lodash';

let initDate = new Date();

export default {
  name: "form-date",
  data() {
    return {
      days: this.zeroPad(localStorage.days || initDate.getDate()),
      month: this.zeroPad(localStorage.month || initDate.getMonth() + 1),
      year: localStorage.year || initDate.getFullYear(),
      hour: this.zeroPad(localStorage.hour || initDate.getHours()),
      minute: this.zeroPad(localStorage.minute || initDate.getMinutes()),
      second: this.zeroPad(localStorage.second || initDate.getSeconds()),
      currDate: new Date()
    };
  },
  mounted() {
    // Update currDate every seconds
    setInterval(() => {
      this.currDate = new Date();
    }, 1000);

    // On input change
    // Persist data
    _.forEach(document.querySelectorAll('.birth-form input'), (node) => {
      node.addEventListener('change', () => this.persistDataToLocalStorage());
    });
  },
  computed: {
    diffTime() {
      let returnDiff = {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };

      // Years
      returnDiff.years = this.currDate.getFullYear() - this.birthtime.getFullYear();
      if (this.birthtime.getMonth() > this.currDate.getMonth())
        returnDiff.years--;
      if (returnDiff.years < 0)
        returnDiff.years = 0;

      // Months
      returnDiff.months = this.currDate.getMonth() - this.birthtime.getMonth();
      if (this.birthtime.getDate() > this.currDate.getDate()) {
        returnDiff.months--
      }
      if (returnDiff.months < 0)
        returnDiff.months += 12;

      // Days
      returnDiff.days = this.currDate.getDate() - this.birthtime.getDate();
      if (this.birthtime.getHours() > this.currDate.getHours()) {
        returnDiff.days--
      }
      if (returnDiff.days < 0)
        returnDiff.days += 31;

      // Hours
      returnDiff.hours = this.currDate.getHours() - this.birthtime.getHours();
      if (this.birthtime.getMinutes() > this.currDate.getMinutes()) {
        returnDiff.hours--
      }
      if (returnDiff.hours < 0)
        returnDiff.hours += 24;

      // Minutes
      returnDiff.minutes = this.currDate.getMinutes() - this.birthtime.getMinutes();
      if (this.birthtime.getSeconds() > this.currDate.getSeconds()) {
        returnDiff.minutes--
      }
      if (returnDiff.minutes < 0)
        returnDiff.minutes += 60;

      // Minutes
      returnDiff.seconds = this.currDate.getSeconds() - this.birthtime.getSeconds();
      if (returnDiff.seconds < 0)
        returnDiff.seconds += 60;

      return returnDiff;
    },
    birthtime() {
      return new Date(
        (this.year !== '') ? this.year : this.currDate.getFullYear(),
        (this.month !== '') ? this.month-1 : this.currDate.getMonth(),
        (this.days !== '') ? this.days : this.currDate.getDate(),
        (this.hour !== '') ? this.hour : this.currDate.getHours(),
        (this.minute !== '') ? this.minute : this.currDate.getMinutes(),
        (this.second !== '') ? this.second : this.currDate.getSeconds()
      );
    }
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
    persistDataToLocalStorage() {
      // Persist date to localstorage
      localStorage.days = this.days;
      localStorage.month = this.month;
      localStorage.year = this.year;
      localStorage.hour = this.hour;
      localStorage.minute = this.minute;
      localStorage.second = this.second;
    },
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

  .birth-form {
    margin-bottom: 50px;
    *:not(:last-child) {
      margin-right: 10px;
    }
    input {
      text-align: center;
      width: 4em;
    }
  }

  .diff-time {
    .diff-time--text {
      .diff-time--text-result {
        span:last-child:not(:first-child)::before {
          content: ' et ';
        }
        span:nth-child(n+2):not(:last-child)::before {
          content: ', ';
        }
      }
    }
  }
</style>
