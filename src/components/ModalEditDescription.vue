<template>
  <div class="modal is-clipped">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ $t('formDate.modaleEditionDescription.title') }}</p>
        <button class="delete" aria-label="close" @click="onClickClose"></button>
      </header>
      <section class="modal-card-body">
        <input class="input" type="text" :placeholder="$t('formDate.modaleEditionDescription.placeHolderInput')" v-model="descriptionValue">
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="onValidate">{{ $t('formDate.modaleEditionDescription.btnValidate') }}</button>
        <button class="button" @click="onClickClose">{{ $t('formDate.modaleEditionDescription.btnCancel') }}</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal-edit-description',
  props: ['fDescriptionValue'],
  data() {
    return {
      descriptionValue: this.fDescriptionValue ? this.fDescriptionValue() : null,
    }
  },
  methods: {
    onValidate() {
      this.$emit('validate', this.descriptionValue);
      this.close();
    },
    onClickClose() {
      this.close();
    },
    close() {
      this.$el.classList.remove('is-active');
      Object.assign(this.$data, this.$options.data.call(this));
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss">
</style>