<template>
  <div id="app">
    <h1>How long, what the hell is this ?</h1>
    <div>
        <div>You regularly forget your age or the age of a loved one ?</div>
        <div>Need to know how long you have been with your partner ?</div>
        <div>Add this website to your favourites and don't think anymore !</div>
        <div>Just pick a date and see the difference grow instantly !</div>
    </div>
    <form-date/>
  </div>
</template>

<script>
import FormDate from './components/FormDate.vue'

export default {
  name: 'app',
  components: {
    FormDate
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cfcfcf;
  margin-top: 60px;
}

body {
  background-color: #2b2b2b;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
