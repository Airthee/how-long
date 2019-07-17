<template>
  <div id="app">
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
