<template>
  <div>
    <div>
      <input type="text" :v-model="day" placeholder="DD">
      <input type="text" :v-model="month" placeholder="MM">
      <input type="text" :v-model="year" placeholder="YYYY">
      <input type="text" :v-model="hour" placeholder="hh">
      <input type="text" :v-model="minut" placeholder="mm">
      <input type="text" :v-model="second" placeholder="ss">
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
      day: null,
      month: null,
      year: null,
      hour: 0,
      minut: 0,
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
      return new Date(
        this.currDate.getFullYear() - this.year,
        this.currDate.getMonth() - this.month,
        this.currDate.getDate() - this.day,
        this.currDate.getHours() - this.hour,
        this.currDate.getMinutes() - this.minut,
        this.currDate.getSeconds() - this.second,
      );
    }
  }
}
</script>

