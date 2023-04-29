<template>
  <div style="width: 100%;height: 200%;position:relative;">

    <div class="mainPage">
      <img src="../../assets/img.png"
           style="position:absolute; filter: brightness(0.5); z-index:-1; width: 100%;height: auto">

      <div class="header">
        <div class="icon">
          <img src="../../assets/logo.png" style="height: 50px;width: auto">
          <div class="text1">智能建造平台</div>
        </div>

        <div class="register">
          <div class="register1" @click="change1"> 登录
          </div>
        </div>

      </div>


      <div class="extend">
        <contents @click="popUp"/>
      </div>


      <div class="texts">
        —— 企业数据查询 ——
      </div>
      <div class="scan">

        <div class="bt">
          <div class="bt1" @click="popUp">扫描录入</div>
          <div class="bt2" @click="popUp">直接录入</div>
        </div>
      </div>


      <div class="texts3">
        —— 企业数字画像 ——
      </div>

      <div style="height: 30px"/>
      <div class="map">
        <!--        <img src="../../assets/img_5.png" style="height: 100%;width: 70%">-->
        <echart1/>
      </div>

      <div style="height: 30px"/>

      <div class="texts2">
        —— 行业图谱 ——
      </div>
      <div style="height: 30px"/>
      <div class="tap">
        <industry-maps/>
      </div>

      <div
          style="width: 100%; justify-content: center;align-items: center;display: flex;opacity: 0.5;margin-bottom: 10px">
        Copyright
        ©2022-2023 SCU, All Rights Reserved.
      </div>

      <div style="height: 30px"/>
    </div>

    <s3-layer v-model="store.state.ifLoginPopup" area="['520px', '340px']" :type="0" :shadeClose="true" :resize="false"
              :scrollbar="false" :move="false" class="s3">
      <user-login/>
    </s3-layer>

    <s3-layer v-model="store.state.ifRegisterPopup" area="['520px', '340px']" :type="0" :shadeClose="true"
              :resize="false"
              :scrollbar="false" :move="false" class="s3">
      <user-register/>
    </s3-layer>

  </div>


</template>

<script setup>
import Contents from "@/components/contents.vue";
import IndustryMaps from "@/components/industryMaps.vue";
import {layer} from "vue3-layer";
import UserLogin from "@/formation/login/userLogin.vue";
import UserRegister from "@/formation/login/userRegister.vue";
import {useStore} from 'vuex'
import {onMounted, onUpdated} from "vue";
// import store from "@/store";
import Echart1 from "@/components/echart1.vue";


const popUp = () => {
  layer.msg("功能尚未实现 ,sry 😄");
}

const store = useStore()  // 该方法用于返回store 实例

onMounted(() => {
  console.log(store)  // store 实例对象
  console.log(store.state.ifRegisterPopup)  // store 实例对象
})

const change1 = () => {
  store.commit('setLogin', true)
  console.log(store)
}
</script>

<style scoped>

.mainPage {
  height: 50%;
  width: 100%;
  margin: 0;
  /*border: 2px solid red;*/
}


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;
  width: 100%;
  /*border:1px solid darkblue;*/
}

.icon {
  height: 100%;
  /*border: 1px solid black;*/
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register {
  /*border:1px solid saddlebrown;*/
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.register1 {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font: 20px Georgia, "Times New Roman", Times, serif;
  height: 50%;
  width: 50%;
  border-radius: 10%;
  border: 2px solid rgba(100, 203, 226);
  transition: 0.1s;
  cursor: pointer;
}

.register1:hover {
  color: rgba(43, 92, 164);
  background-color: white;
  width: 55%;
  height: 55%;
}

.text1 {
  font: 30px Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  color: rgba(100, 203, 226, 1);
}

.extend {
  display: flex;
  width: 100%;
  height: 40%;
  /*border: 1px solid oldlace;*/
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

.extend1 {
  /*border: 2px solid rgba(100, 203, 226, 1);*/
  height: 100%;
  width: 8%;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 3%;
}

.summary1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 75%;
  /*border: 2px solid green;*/
  font-size: 5px;
}

.scan {
  height: 15%;
  /*border: 1px solid bisque;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.bt {
  height: 50%;
  width: 60%;
  /*border: 2px solid deeppink;*/
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.bt1 {
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 8%);
  height: 50%;
  width: 20%;
  /*border: 2px solid #2980b9;*/
  color: #2980b9;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: .5s;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-around;
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  letter-spacing: 1rem;
  text-indent: 1rem;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
  line-height: 100%;
}

.bt2 {
  box-shadow: 0 0 5px 5px rgb(0 0 0 / 8%);
  height: 50%;
  width: 20%;
  /*border: 2px solid #2980b9;*/
  color: #2980b9;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: .5s;
  font-size: 20px;
  font-weight: bold;
  justify-content: space-around;
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  letter-spacing: 1rem;
  text-indent: 1rem;
  border-radius: 20px;
  box-sizing: border-box;
  text-align: center;
  line-height: 100%;
}

.bt1::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 0;
  height: 100%;
  left: 0;
  background-color: #2980b9;
  transition: ease-in-out .5s;
}

.bt1:hover::before {
  width: 100%;
}

.bt1:hover {
  color: white;
}

.bt2::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 0;
  height: 100%;
  left: 0;
  background-color: #2980b9;
  transition: ease-in-out .5s;
}

.bt2:hover::before {
  width: 100%;
}

.bt2:hover {
  color: white;
}

.texts {
  /*border: 1px solid rebeccapurple;*/
  margin-top: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}

.texts2 {
  /*border: 1px solid rebeccapurple;*/
  /*margin-top: 10px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}

.texts3 {
  /*border: 1px solid rebeccapurple;*/
  /*margin-top: 10px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
}


.map {
  width: 100%;
  height: 70%;
  /*border: 2px solid red;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.tap {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  /*border: 2px solid rosybrown;*/
}

</style>
