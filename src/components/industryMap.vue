<template>
  <div class="main1">
    <div class="head1">
      <div class="text11">信息科技</div>
    </div>

    <div class="bottom1">
      <div v-for="(site, index) in sites" class="text21">
        <div>{{site[0]}}</div>
        <div>{{site[1]}}</div>
        <div>{{site[2]}}</div>
      </div>
    </div>

  </div>
</template>

<script setup>


const sites= [
  ['a','b','c'],['a','b','c'], ['a','b','c'],['a','b','c'], ['a','b','c'],['a','b','c'],['a','b','c']
]
</script>

<style scoped>
.main1{
  /*border:1px solid rebeccapurple;*/
  height: 100%;
  width: 21%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.head1{
  height: 20%;
  width: 100%;
  background-image: url("../assets/sci1.png");
  /*border:1px solid rebeccapurple;*/
}

.bottom1{
  padding-top: 10px;
  background-color: rgba(244,243,251);
  /*border:1px solid red ;*/
  width: 100%;
  height: 80%;
}

.text11{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.text21{
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
</style>
