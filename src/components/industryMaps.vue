<template>
  <div class="main">
    <industry-map></industry-map>
    <industry-map></industry-map>
    <industry-map></industry-map>
    <industry-map></industry-map>
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
