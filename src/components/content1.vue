<template>
  <div class="mainPage1">

    <div class="left" :style="{background:'url('+require('@/assets/'+img)+') no-repeat 30% 20%/ 65% 80%'}">
      <div class="text1">
        {{ text1 }}
      </div>
      <div class="text2">
        {{ text2 }}
      </div>
    </div>

    <div class="right">
      <div class="text3">
        {{ text3 }}
      </div>
    </div>
  </div>

</template>

<script setup>
const props = defineProps({
  text1: String,
  text2: String,
  img: String,
  text3: String
})

console.log(props.img)

</script>

<style scoped>
.mainPage1 {
  display: flex;
  /*border: 1px solid red;*/
  height: 100%;
  width: 9%;
  background: rgba(43, 92, 164);
  /* background: linear-gradient(rgba(40, 140, 234, 0.9), rgba(40, 140, 234, 0.9)), url('../../assets/icon.png') no-repeat 250px 40px/ 150px 150px;*/
  border-radius: 5%;
  cursor: pointer;
  transition: 1s;
  margin-left: 15px;
  margin-right: 15px;
}

.left {
  display: flex;
  flex-direction: column;
  /*border: 1px solid blue;*/
  height: 100%;
  width: 0%;
  justify-content: flex-end;
  align-items: flex-start;
  background: url('../assets/img_1.png') no-repeat 20% 20%/ 80% 80%;

}

.text2 {
  /*!*border: 2px solid rebeccapurple;*!*/
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
  color: white;
  font: 18px Georgia, 黑体, Times, serif;
  margin-left: 20px;
  margin-bottom: 30px;
  word-spacing: 3px;
  opacity: 0;
}

.text1 {
  /*!*border: 2px solid rebeccapurple;*!*/
  justify-content: flex-start;
  align-items: flex-end;
  display: flex;
  color: white;
  font: 18px Georgia, 黑体, Times, serif;
  margin-left: 20px;
  margin-bottom: 5px;
  word-spacing: 3px;
  opacity: 0;
}

.right {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /*border:2px solid rebeccapurple;*/
}

.text3 {
  font: 30px Georgia, 黑体, Times, serif;
  height: 100%;
  width: 20%;
  color: white;
  /*border: 1px solid saddlebrown;*/
  display: flex;
  justify-content: center;
  align-items: center;
  word-spacing: 10px;
}


.mainPage1:hover {
  width: 30%;
}

.mainPage1:hover .text1 {
  opacity: 1;
}

.mainPage1:hover .text2 {
  opacity: 1;
}

.mainPage1:hover .left {
  width: 70%;
}

.mainPage1:hover .right {
  width: 30%;
}

</style>
