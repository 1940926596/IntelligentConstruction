<template>
  <router-view/>
</template>

<style>
body, html {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
  margin: 0;
}

.layui-layer-title {
  color: red !important;
  font-weight: bold;
  height: 0px !important;
}

.layui-layer-btn{
  height: 0px !important;
  overflow: hidden;
  padding: 0 !important;
}

.layui-layer-btn0{

  height: 0px !important;
  overflow: hidden;
}

.layui-layer-content{
  background-image: url("./assets/loginBackground.png") !important;
  background-repeat: no-repeat;
  background-size: cover;

}

</style>
