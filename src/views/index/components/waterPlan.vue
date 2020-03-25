<template>
  <div class="panel_wrapper panel_wrapper_33">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          用水计划
        </div>
        <div class="title_r" />
      </div>
      <div class="plan_wrap">
        <div class="plan_up">
          <div class="up_left">
            <p class="skyblue">年度计划用水量</p>
            <p class="orange">3000</p>
          </div>
          <div class="up_right">
            <p class="skyblue">2019年累计用水量</p>
            <p class="orange">2560</p>
          </div>
        </div>
        <div class="plan_down">
          <div class="down_left">
            <p class="skyblue">月度计划用水量</p>
            <p class="orange">250</p>
          </div>
          <div class="down_right">
            <p class="skyblue">2019年/3月累计用水量</p>
            <p class="orange">186</p>
          </div>
        </div>
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  mounted () {
    
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
  .s_title {
    width: 100%;
    height: 48px;
    display: flex;
    .title_l {
      flex: 1;
      width: 130px;
      line-height: 30px;
      border-radius: 2px;
      font-size: 18px;
      text-align: center;
      color: rgb(143, 185, 196); 
      box-shadow: 0px 0px 21px rgb(152, 175, 182) inset;
    }
    .title_r {
      flex: 3;
      display: flex;
    }    
  }
  .plan_wrap {
    width: 98%;
    height: calc(100% - 60px);
    margin: 6px auto;
    display: flex;
    flex-direction: column;
    padding-left: 36px;

    .plan_up {
      width: 100%;
      height: 100%;
      flex: 1;
      display: flex;
      .up_left {
        flex: 1;
      }
      .up_right {
        flex: 1;
      }      
    }
    .plan_down {
      flex: 1;
      display: flex;
      justify-content: space-around;
      width: 100%;
      height: 100%;
      .down_left {
        flex: 1;
      }
      .down_right {
        flex: 1;
      }       
    }
    .skyblue:after {
      content: 'm³';
      color: #dedede;

    }
  }

</style>