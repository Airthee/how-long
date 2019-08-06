<template>
  <div>
    <select 
      v-model="selected"
    >
      <option 
        v-for="option in options" :key="option.value" 
        :value="option.value" 
      >
        {{ option.label }}
      </option>
    </select>
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
      i18nTranslations.setLang(newVal);
    }
  }
}
</script>

