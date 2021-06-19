<template>
  <div v-if="loaded" ref="test"></div>
</template>
<script>
export default {
  methods: {
    async showDiv() {
      this.loaded = true
      await Vue.nextTick()
      this.$refs.test.xxxxx
    }
  }
}
</script>
