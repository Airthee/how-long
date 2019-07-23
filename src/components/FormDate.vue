<template>
  <div>
    <div>
      <input type="text" v-model="days" placeholder="DD">
      <input type="text" v-model="month" placeholder="MM">
      <input type="text" v-model="year" placeholder="YYYY">
      <input type="text" v-model="hour" placeholder="hh">
      <input type="text" v-model="minute" placeholder="mm">
      <input type="text" v-model="second" placeholder="ss">
    </div>
      
    <div>
      <div>Current time : {{ currDate }}</div>
      <div>Diff time : {{ diffTime }}</div>
    </div>
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: 'form-date',
  data() {
    return {
      days: null,
      month: null,
      year: null,
      hour: 0,
      minute: 0,
      second: 0,
      currDate: new Date()
    }
  },
  mounted() {
    setInterval(() => {
      this.currDate = new Date();
    }, 1000);
  },
  computed: {
    diffTime() {
      return this.currDate - this.birthtime;
    },
    birthtime() {
      return new Date(
        this.year ? this.year : this.currDate.getFullYear(),
        this.month ? this.month : this.currDate.getMonth(),
        this.days ? this.days : this.currDate.getDate(),
        this.hour ? this.hour : this.currDate.getHours(),
        this.minute ? this.minute : this.currDate.getMinutes(),
        this.second ? this.second : this.currDate.getSeconds(),
      );
    }
  }
}
</script>

