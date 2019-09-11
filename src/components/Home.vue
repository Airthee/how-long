<template>
  <div class="has-text-centered">
    <section class="section">
      <div class="container">
        <div class="content">
          <img class="home-logo" src="/logo.svg">
          <h1>{{ $t('home.description.title') }}</h1>
          <p v-html="$t('home.description.text')"></p>
          <form-date/>
        </div>
      </div>
    </section>
    <footer class="footer">
      <language-select/>
      <span class="footer-link">
        <a href="http://github.com/Airthee/how-long" target="_blank">
          <img class="image is-32x32" src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="Github LOGO" :title="$t('footer.githubTitle')">
        </a>
      </span>
    </footer>
  </div>
</template>

<script>
import FormDate from './FormDate';
import LanguageSelect from './LanguageSelect';

export default {
  name: 'home',
  components: {
    FormDate, LanguageSelect
  }
}
</script>