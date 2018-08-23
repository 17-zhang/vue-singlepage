<template>
  <div>
    <div class="block">
      <span class="demonstration">hover 显示颜色</span>
      <span class="wrapper">
      <el-button :plain="true" type="success">成功按钮</el-button>
      <el-button :plain="true" type="warning">警告按钮</el-button>
      <el-button :plain="true" type="danger">危险按钮</el-button>
      <el-button :plain="true" type="info">信息按钮</el-button>
    </span>
    </div>
    <div class="block">
      <span class="demonstration">消息提示</span>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      open () {
        this.$message('这是一条消息提示！')
      },
      open2 () {
        this.$message({
          message: '这是一条成功消息！',
          type: 'success'
        })
      },
      open3 () {
        this.$message({
          message: '这是一条警告消息！',
          type: 'warning'
        })
      },
      open4 () {
        this.$message.error('这是一条错误消息！')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    margin: 10px 0;
  }
</style>
