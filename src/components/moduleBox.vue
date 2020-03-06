<template>
  <div class="panel_wrapper panel_wrapper_26">
    <dv-border-box-12>
      <div class="chart">
        <slot></slot>
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .chart {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
</style>