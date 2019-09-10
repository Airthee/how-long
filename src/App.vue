<template>
  <div id="app" class="has-text-centered">
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
import FormDate from './components/FormDate.vue';
import LanguageSelect from './components/LanguageSelect.vue';

export default {
  name: 'app',
  components: {
    FormDate,
    LanguageSelect
  }
}
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Customize colors
  $footer-background-color: #00000038;
  $main-text-color: #cfcfcf;
  $content-heading-color: $main-text-color;
  $footer-padding: 1rem;

  body {
    background-color: #2b2b2b;

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: $main-text-color;

      section {
        min-height: 100vh;
      }
    }

    footer {
      .footer-link {
        img {
          display: inline-block;
        }
      }
    }
  }

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>