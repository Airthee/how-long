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

let initDate = new Date();

export default {
  name: "form-date",
  data() {
    return {
      days: this.zeroPad(initDate.getDate()),
      month: this.zeroPad(initDate.getMonth() + 1),
      year: initDate.getFullYear(),
      hour: this.zeroPad(initDate.getHours()),
      minute: this.zeroPad(initDate.getMinutes()),
      second: this.zeroPad(initDate.getSeconds()),
      currDate: new Date()
    };
  },
  mounted() {
    setInterval(() => {
      this.currDate = new Date();
    }, 1000);
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
      let diff = new Date(this.currDate - this.birthtime);
      returnDiff.years = diff.getFullYear() - 1970;
      // Months
      returnDiff.months = diff.getMonth();
      
      // Days
      returnDiff.days = diff.getDate() - 1;
      
      // Hours
      returnDiff.hours = diff.getHours()-1;
      
      // Minutes
      returnDiff.minutes = diff.getMinutes();

      // seconds
      returnDiff.seconds = diff.getSeconds();
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
