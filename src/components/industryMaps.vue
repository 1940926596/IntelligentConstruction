<template>
  <div class="main">
    <industry-map img="sci1.png" text2="工程监理" color="rgb(239,246,252)"></industry-map>
    <industry-map img="sci2.png" text2="工程设计" color="rgb(254,249,255)"></industry-map>
    <industry-map img="sci3.png" text2="工作人员" color="rgb(236,250,253)"></industry-map>
    <industry-map img="sci4.png" text2="造价咨询" color="rgb(244,242,253)"></industry-map>
  </div>
</template>

<script setup>
import IndustryMap from "@/components/industryMap.vue";
</script>

<style scoped>
.main{
  /*border:5px solid red;*/
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-around;
}
</style>
