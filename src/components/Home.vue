<template>
  <div class="container">
    <div class="content">
      <img class="home-logo" src="/logo.svg" alt="How Long logo">
      <h1>{{ $t('home.description.title') }}</h1>
      <p v-html="$t('home.description.text')"></p>
      <form-date/>
    </div>
  </div>
</template>

<script>
import FormDate from './FormDate';

export default {
  name: 'home',
  components: {
    FormDate
  }
}
</script>