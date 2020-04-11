<template>
  <div class="welcome">
    <div class="bgc">
      <p>欢迎使用节水监测云平台</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .welcome {
    width: 100%;
    height: 100%;
    position: relative;
    .bgc {
      width: 72%;
      height: 72%;
      // background-color: rgb(223, 232, 236);
      // box-shadow: 4px 4px 10px rgba(54, 52, 59, 0.06);
      background: hsla(0,0%,100%,.25) border-box;   
      overflow: hidden;   
      border-radius: .3em;   
      box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,   
                  0 .5em 1em rgba(0, 0, 0, 0.2);   



      border-radius: 6px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    // &::before{   
    //   content: '';   
    //   position: absolute;   
    //   top: 0; 
    //   right: 0;
    //   bottom: 0; 
    //   left: 0;   
    //   margin: -30px;   
    //   z-index: -1;   
    //   -webkit-filter: blur(20px);   
    //   filter: blur(20px);   
    // }       
      p {
        position: absolute;
        top: 18%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        margin: 0 auto;
        font-size: 3rem;
        color: rgb(129, 149, 165);
        letter-spacing: 2px;
      }
    }
  

  }
 
</style>