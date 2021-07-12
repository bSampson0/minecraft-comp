<template>
  <div class="hero text-center justify-center py-6">
    <h1>{{ name }}</h1>
    <span>{{ description }}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background: #195f1f;
}
</style>
