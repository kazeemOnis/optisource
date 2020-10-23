<template>
  <div>
    <div class="page__header-mask" />
    <div class="page__header">
      <div class="page__header-body">
        <div>
          <p class="page__header-title">{{ banner.title }}</p>
          <p class="page__header-subtitle">{{ banner.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
