<template>
  <div>
    <div class="control is-small has-icons-left select">
      <div class="select">
        <select v-model="selected">
          <option 
            v-for="option in options" :key="option.value" 
            :value="option.value" 
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <span class="icon is-small is-left">
        <i class="fas fa-globe"></i>
      </span>
    </div>
  </div>
</template>

<script>
import i18nTranslations from '@/i18n-translations';

export default {
  name: 'language-select',
  data() {
    return {
      selected: i18nTranslations.getCurrentLang(),
      options: [
        {
          value: 'fr',
          label: 'Français',
          icon: ''
        },
        {
          value: 'en',
          label: 'English',
          icon: ''
        }
      ]
    };
  },
  watch: {
    selected(newVal) {
      window.location.href = `/${newVal}`;
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    color: #222222 !important;
  }
</style>