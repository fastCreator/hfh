<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="less">
* {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
html,
body {
  width: 100;
  height: 100%;
  // overflow: hidden;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
  .el-input {
    width: 200px;
  }
}
.my-cell {
  >* {
    margin-right: 20px;
  }
  margin-bottom: 20px;
}
</style>
