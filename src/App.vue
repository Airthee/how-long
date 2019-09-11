<template>
  <div id="app" class="has-text-centered">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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