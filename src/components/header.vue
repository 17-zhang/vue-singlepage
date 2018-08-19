<link rel="stylesheet" href="../assets/scss/_header.scss">
<template>
  <div class="m-header">
    {{ adminName }}
  </div>
</template>

<script>
  import { store } from '../vuex/store'

  export default {
    name: 'header',
    data () {
      return {
        adminNameName: store.state.adminName
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/_header.scss";
</style>
