<template>
  <div class="social-container">
    <h1>Share on</h1>
    <div class="social-wrapper">
      <ShareNetwork
        v-for="network in networks"
        class="social"
        :network="network.network"
        :key="network.network"
        :style="{ backgroundColor: network.color }"
        :url="sharing.url"
        :title="loadTitle"
      >
        <i :class="network.icon"></i>
        <span>{{ network.name }}</span>
      </ShareNetwork>
    </div>
  </div>
</template>

<script>
export default {
  name: "social-sharing-buttons",
  data() {
    return {
      sharing: {
        url: "https://how-long.xyz",
      },
      networks: [
        {
          network: "email",
          name: "Email",
          icon: "far fah fa-lg fa-envelope",
          color: "#333333",
        },
        {
          network: "facebook",
          name: "Facebook",
          icon: "fab fah fa-lg fa-facebook-f",
          color: "#1877f2",
        },
        {
          network: "flipboard",
          name: "Flipboard",
          icon: "fab fah fa-lg fa-flipboard",
          color: "#e12828",
        },
        {
          network: "hackernews",
          name: "HackerNews",
          icon: "fab fah fa-lg fa-hacker-news",
          color: "#ff4000",
        },
        {
          network: "instapaper",
          name: "Instapaper",
          icon: "fas fah fa-lg fa-italic",
          color: "#428bca",
        },
        {
          network: "line",
          name: "Line",
          icon: "fab fah fa-lg fa-line",
          color: "#00c300",
        },
        {
          network: "linkedin",
          name: "LinkedIn",
          icon: "fab fah fa-lg fa-linkedin",
          color: "#007bb5",
        },
        {
          network: "odnoklassniki",
          name: "Odnoklassniki",
          icon: "fab fah fa-lg fa-odnoklassniki",
          color: "#ed812b",
        },
        {
          network: "pinterest",
          name: "Pinterest",
          icon: "fab fah fa-lg fa-pinterest",
          color: "#bd081c",
        },
        {
          network: "pocket",
          name: "Pocket",
          icon: "fab fah fa-lg fa-get-pocket",
          color: "#ef4056",
        },
        {
          network: "quora",
          name: "Quora",
          icon: "fab fah fa-lg fa-quora",
          color: "#a82400",
        },
        {
          network: "reddit",
          name: "Reddit",
          icon: "fab fah fa-lg fa-reddit-alien",
          color: "#ff4500",
        },
        {
          network: "skype",
          name: "Skype",
          icon: "fab fah fa-lg fa-skype",
          color: "#00aff0",
        },
        {
          network: "sms",
          name: "SMS",
          icon: "far fah fa-lg fa-comment-dots",
          color: "#333333",
        },
        {
          network: "stumbleupon",
          name: "StumbleUpon",
          icon: "fab fah fa-lg fa-stumbleupon",
          color: "#eb4924",
        },
        {
          network: "telegram",
          name: "Telegram",
          icon: "fab fah fa-lg fa-telegram-plane",
          color: "#0088cc",
        },
        {
          network: "tumblr",
          name: "Tumblr",
          icon: "fab fah fa-lg fa-tumblr",
          color: "#35465c",
        },
        {
          network: "twitter",
          name: "Twitter",
          icon: "fab fah fa-lg fa-twitter",
          color: "#1da1f2",
        },
        {
          network: "viber",
          name: "Viber",
          icon: "fab fah fa-lg fa-viber",
          color: "#59267c",
        },
        {
          network: "vk",
          name: "Vk",
          icon: "fab fah fa-lg fa-vk",
          color: "#4a76a8",
        },
        {
          network: "weibo",
          name: "Weibo",
          icon: "fab fah fa-lg fa-weibo",
          color: "#e9152d",
        },
        {
          network: "whatsapp",
          name: "Whatsapp",
          icon: "fab fah fa-lg fa-whatsapp",
          color: "#25d366",
        },
        {
          network: "wordpress",
          name: "Wordpress",
          icon: "fab fah fa-lg fa-wordpress",
          color: "#21759b",
        },
        {
          network: "xing",
          name: "Xing",
          icon: "fab fah fa-lg fa-xing",
          color: "#026466",
        },
      ],
    };
  },
  computed: {
    loadTitle() {
      return this.$i18n.t("app.title");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.social-container {
  display: none;
}

@include mobile {
  .social-container {
    display: block;
  }

  .social-container {
    h1 {
      margin-bottom: 1rem;
    }
  }

  .social-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
  }

  .social-wrapper .social {
    flex: none;
    color: #ffffff;
    background-color: #333;
    border-radius: 3px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 15px 15px 0;
  }

  .social-wrapper .fah {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 10px;
    flex: 0 1 auto;
  }

  .social-wrapper span {
    padding: 0 10px;
    flex: 1 1;
    font-weight: 500;
  }
}
</style>