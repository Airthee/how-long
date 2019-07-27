<template>
  <div id="app">
    <h1>How old are you ?</h1>
    <p>Just type your birthdate and see your age grow instantly !</p>
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
