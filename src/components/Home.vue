<template>
  <div class="container">
    <div class="content">
      <img class="home-logo" src="/logo.svg" alt="How Long logo" />
      <h1>{{ $t("home.description.title") }}</h1>
      <p v-html="$t('home.description.text')"></p>
      <form-date />
    </div>
    <social-sharing-buttons />
  </div>
</template>

<script>
import FormDate from "./FormDate";
import SocialSharingButtons from "./SocialSharingButtons";

export default {
  name: "home",
  components: {
    FormDate,
    SocialSharingButtons,
  },
};
</script>