<template>
  <div class="panel_wrapper panel_wrapper_33">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          节水
        </div>
        <div class="title_r" />
      </div>
      <div class="saving_wrap">
        <div class="saving_left">
          <div class="circle">
            <p>0.645</p>
            <p>昨日用水量</p>
          </div>
        </div>
        <div class="saving_right">
          <div class="right_up">
            <p>环比节水: 0.278</p>
          </div>
          <div class="right_down">
            <p>同比节水: 1.980</p>
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
  mounted() {
  
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
  .saving_wrap {
    width: 98%;
    height: calc(100% - 60px);
    margin: 0 auto;
    display: flex; 
    .saving_left {
      flex: 1;
      .circle {
        width: 60%;
        height: 60%;
        border: 1px solid #2c58a6;
        border-radius: 19px;
        box-shadow: rgba(38, 97, 129, 0.533) 0px 0px 30px inset;
        border-color: rgb(50, 80, 94);          
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        >p {
          padding: 6px 0;
        }
      }
    }
    .saving_right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .right_up,
      .right_down {
        flex: 1;
        >p {
          width: 60%;
          height: 60%;
          border: 1px solid #2c58a6;
          border-radius: 19px;
          box-shadow: rgba(38, 97, 129, 0.533) 0px 0px 30px inset;
          border-color: rgb(50, 80, 94);          
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

</style>