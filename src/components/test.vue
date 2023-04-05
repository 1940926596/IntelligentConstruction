<template>
  <h1>{{a.age}}</h1>
  <h1>{{a.name}}</h1>
  <button @click="change">change</button>
</template>

<script setup>

import {reactive, ref} from "vue";

var a=ref({
  name:'chen',
  age:18
})


const change=()=>{
  console.log(a)
  a={
    name:'chen2',
    age:180
  }
  console.log(a)
  a.age=12
}

</script>

<style scoped>

</style>
