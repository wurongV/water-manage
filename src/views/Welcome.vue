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