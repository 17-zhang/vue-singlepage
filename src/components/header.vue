<template>
  <div class="m-header">
    {{ adminName }}
  </div>
</template>

<script>
  import { store } from '../vuex/store'

  export default {
    name: 'm-header',
    data () {
      return {
        adminName: store.state.adminName
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/header";
</style>
