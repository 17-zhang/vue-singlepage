<template>
  <div>
    <h2>关于指令v-for</h2>
    <ol>
      <li v-for="todo in todos">{{todo.text}}</li>
    </ol>
    <h2>关于click事件</h2>
    <button @click="eClick()">操作状态</button>
    <h2>关于状态管理vuex</h2>
    <div>{{number}}</div>
    <h2>关于slot</h2>
    <button class="icon right" @click="areaClick()">弹窗案例</button>
    <h2>关于props</h2>
    <div class="m-page">
      <pages-tab
        :page-index="currentPage"
        :total="count"
        :page-size="pageSize"
        :per-pages="perPages">
      </pages-tab>
    </div>
    <dialogs-tab v-show="dialogBool">
      <div slot="dialogsHeader">
        <span v-text="dialogTitle"></span>
      </div>
      <div slot="dialogsContain">
        <p>这里是弹窗具体内容</p>
        <p>这里是弹窗具体内容</p>
      </div>
    </dialogs-tab>
  </div>
</template>

<script>
  import { store } from '../vuex/store'
  import dialog from '../components/dialog'
  import page from '../components/page'

  export default {
    name: 'about',
    components: {
      dialog,
      page
    },
    data () {
      return {
        todos: [
          {text: 'Learn JavaScrpt'},
          {text: 'Learn Vue'},
          {text: 'Build something awesome'}
        ],
        dialogsTitle: '',
        perPages: 7,
        pageSize: 20,  // 每页显示20条数据
        currentPage: 1,  // 当前页码
        count: 200,  // 总记录数
        items: []
      }
    },
    methods: {
      eClick () {
        console.log(9999)
        store.commit('inc')
      },
      areaClick () {
        console.log('areaClick')
        store.commit('dialogBoolTrue')
        console.log(store.state.dialogBool)
      }
    },
    computed: {
      number () {
        return store.state.count
      },
      dialogBool () {
        return store.state.dialogBool
      }
    }
  }
</script>

<style lang="scss" scoped>
  h2 {
    background: #417ccc;
    margin: 15px 0 5px;
    color: #fff;
  }
</style>
