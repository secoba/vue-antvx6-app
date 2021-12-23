<template>
  <div class="start-node">
    <i class="el-icon-video-play"></i>
    <span class="node-txt">任务开始</span>
  </div>
</template>

<style lang="scss" scoped>
.start-node {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 1px 1px 6px #919191;

  width: 87px;
  height: 25px;
  padding: 4px;
  border-radius: 4px;
  border: none; //rgba(0, 0, 0, 0.72);
  position: relative;

  i.el-icon-video-play {
    font-size: 25px;
    color: #00be47;
  }

  .node-txt {
    font-size: 14px;
    color: #4d4d4d;
    margin-left: 4px;
  }
}
</style>
