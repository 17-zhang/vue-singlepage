<template>
  <div class="m-dialog-wrapper">
    <div class="box">
      <h1>弹窗标题</h1>
      <slot name="dialogsContain"></slot>
      <div>
        <span class="m-btn">确定</span>
        <span class="m-btn" @click="dialogCancel()">取消</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../vuex/store'

  export default {
    name: 'dialog',
    data () {
      return {
        count: 0,
        dialogBool: store.state.dialogBool,
        title: '0'
      }
    },
    methods: {
      dialogCancel () {
        store.commit('dialogBoolFalse')
        console.log(store.state.dialogBool)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .f-arctileBox, .m-mask {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }

  .m-dialog-wrapper {
    @extend .f-arctileBox;  /* 将.f-arctileBox选择器下的样式继承给.m-dialog-wrapper */
    .boxBg {
      background: #fff;
      opacity: 1;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px 0 50px 0;
    }

    .box {
      background: #fff;
      margin: auto;
      box-shadow: 3px 3px 5px #ccc;
      border: 1px solid #cdcdcd;
      padding: 20px;
      width: 300px;
      position: relative;
    }
  }
</style>
