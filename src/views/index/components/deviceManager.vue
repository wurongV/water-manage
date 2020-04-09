<template>
  <div class="panel_wrapper panel_wrapper_26">
    <dv-border-box-12 :color="['#227ead', 'rgb(124, 231, 253)']">
      <div class="pad_6 s_title">
        <div class="title_l">
          设备管理
        </div>
        <div class="title_r" />
      </div>
      <div class="device_manage_wrap">
        <div class="device_manage_quantity">
          <div class="outline_border">
            <p>100%</p>
            <p>完好率</p>
          </div>
        </div>
        <div class="device_manage_ratio">                
          <p>压力计：2个</p>
          <p>计量器具：22个</p>
          <p>异常设备：0个</p>                    
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
  .device_manage_wrap {
    width: 98%;
    height: calc(100% - 42px);
    margin: 0 auto;       
    display: flex;     
    justify-content: space-around;
    align-items: center; 
    .device_manage_quantity {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;   
      .outline_border {
        width: 66%;
        height: 50%;
        border: 1px solid #2c58a6;
        border-radius: 6px;
        box-shadow: rgba(38, 97, 129, 0.533) 0px 0px 30px inset;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        >p {
          padding: 6px 0;
        }
      }         
    }     
    .device_manage_ratio {
      width: 50%;
      height: 68%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }      
  } 
</style>