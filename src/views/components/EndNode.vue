<template>
  <div class="end-node">
    <i class="el-icon-video-pause"></i>
    <span class="node-txt">任务结束</span>
  </div>
</template>

<style lang="scss" scoped>
.end-node {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 1px 1px 6px #919191;

  width: 87px;
  height: 25px;
  padding: 4px;
  border-radius: 4px;
  border: none;
  position: relative;

  i.el-icon-video-pause {
    font-size: 25px;
    color: #ff2323;
  }

  .node-txt {
    font-size: 14px;
    color: #4d4d4d;
    margin-left: 4px;
  }
}
</style>
