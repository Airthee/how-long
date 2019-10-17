<template>
  <div id="app" class="has-text-centered">
    <section class="section">
      <router-view></router-view>
    </section>
    <footer class="footer">
      <language-select/>
      <div class="footer-link">
        <a href="http://github.com/Airthee/how-long" target="_blank">
          <img class="image is-48x48" src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="Github LOGO" :title="$t('footer.githubTitle')">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
import LanguageSelect from '@/components/LanguageSelect';

export default {
  name: 'app',
  components: { LanguageSelect }
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

      &>section:first-child {
        min-height: 100vh;
      }
    }

    footer {
      .footer-link {
        margin-top: 5px;
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