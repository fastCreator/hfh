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
}
.wrap {
  font-size: 0;
  overflow: hidden;
  & > .left {
    float: left;
    font-size: 16px;
  }
  & > .right {
    float: right;
    font-size: 16px;
  }
}

.bz {
  margin-top: 20px;
  .left {
    color: red;
    margin: 20px 0 30px;
  }
  .right {
    display: inline-block;
    width: calc(100% - 74px);
    vertical-align: top;
    line-height: 25px;
  }
}
</style>
