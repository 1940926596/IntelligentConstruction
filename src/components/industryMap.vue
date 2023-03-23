<template>
  <div class="main">
    <div class="head">
      <div class="text1">信息科技</div>
    </div>

    <div class="bottom">
      <div v-for="(site, index) in sites" class="text2">
        <div>{{site[0]}}</div>
        <div>{{site[1]}}</div>
        <div>{{site[2]}}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
const sites= [
  ['a','b','c'],['a','b','c'],['a','b','c'],['a','b','c'], ['a','b','c'] ,['a','b','c']
]
</script>

<style scoped>
.main{
  border:1px solid rebeccapurple;
  height: 40%;
  width: 15%;
}

.head{
  height: 20%;
  width: 100%;
  background-image: url("../assets/logo.png");
  overflow: hidden;

}

.bottom{
  background-color: rgba(244,243,251);
  width: 100%;
  height: 80%;
}

.text1{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

.text2{
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
</style>
