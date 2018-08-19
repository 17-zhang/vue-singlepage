<template>
  <div class="m-menu">
    <ul>
      <li v-for="(childMenu, key, childIndex) in menuList" class="childMenu">
        <router-link :to="childMenu.to" :from="childMenu.to">{{childMenu.text}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { menuDatas } from '../assets/data/jsondata'

  export default {
    name: 'menu',
    data () {
      return {
        menuList: menuDatas
      }
    },
    methods: {}
  }
</script>

<style scoped>
  @import "../assets/scss/_menu.scss";
</style>
