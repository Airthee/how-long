<template>
  <div id="app">
    <div class="main-content">
      <h1>{{ $t('home.description.title') }}</h1>
      <p v-html="$t('home.description.text')"></p>
      <form-date/>
    </div>
    <footer>
      <language-select/>
      <div class="github-links">
        <span class="github-link">
          <a href="http://github.com/Airthee/how-long" target="_blank">
            <img height="40px" src="@/assets/GitHub-Mark-Light-120px-plus.png" alt="Github LOGO" :title="$t('footer.githubTitle')">
          </a>
        </span>
      </div>
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
  body {
    background-color: #2b2b2b;
    margin: 0;
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #cfcfcf;
      height: 100%;
      width: 100%;
    }

    .main-content {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: auto;
    }

    footer {
      position: absolute;
      bottom: 0px;
      width: 100%;
      background-color: #00000038;
      color: white;

      .github-links:hover {
        opacity: 0.3;
      }
    }
  }
</style>