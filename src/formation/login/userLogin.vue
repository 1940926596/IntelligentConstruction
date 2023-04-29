<template>
  <div class="main3" style="position:relative;">
    <div class="head">
      <div class="icon">
        <img src="../../assets/logo.png" style="height:40px">
        智能建造平台
      </div>
    </div>

    <div class="footer">
      <form class="texts">
        <div class="account">账号：
          <input style="width: 130px;height: 20px"/>
        </div>
        <div class="pwd">密码：
          <input style="width: 130px;height: 20px"/>
        </div>
      </form>
      <div class="yes" @click="popUp">登录</div>
    </div>

    <div
        style="height: 10%;display: flex;align-items: center;justify-content: flex-start;margin-left: 20px;color: rgba(150,150,150)">
      <div class="register" @click="change1">注册账号</div>
    </div>
  </div>
</template>


<script setup>
import store from "@/store";
import {layer} from "vue3-layer";
import {useStore} from "vuex";
import {onMounted} from "vue"; // 引入useStore 方法

// const store = useStore()  // 该方法用于返回store 实例

onMounted(() => {
  console.log(store)
})

const change1 = () => {
  store.commit('setLogin', false);
  store.commit('setRegister', true);
  console.log(store.state)
}

const popUp = () => {
  layer.msg("功能尚未实现 ,sry 😄");
}

</script>

<style scoped>
.main3 {
  /*border: 2px solid red;*/
  width: 500px;
  height: 340px;
  margin-top: 20px;
}

.head {
  height: 20%;
  width: 100%;
  /*border: 1px solid deeppink;*/
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

}

.icon {
  /*border: 1px solid aqua;*/
  justify-content: center;
  display: flex;
  align-items: center;
  color: rgba(70, 142, 158);
  font: 20px Georgia, "Times New Roman", Times, serif;
}

.footer {
  /*background-color: white;*/
  height: 70%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*border: 1px solid aqua;*/
  flex-direction: column;
}

.texts {
  height: 70%;
  width: 50%;
  /*border: 2px solid red;*/
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.account {
  height: 30%;
  width: 100%;
  /*border: 1px solid aqua;*/
  display: flex;
  align-items: center;
  font: 20px Georgia, "Times New Roman", Times, serif;
}

.pwd {
  height: 30%;
  width: 100%;
  /*border: 1px solid aqua;*/
  display: flex;
  align-items: center;
  font: 20px Georgia, "Times New Roman", Times, serif;
  margin-bottom: 50px;
}

.yes {
  width: 40%;
  height: 20%;
  background: linear-gradient(to right, rgba(243, 188, 211), rgba(205, 214, 242));
  border-radius: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  font: 20px Georgia, "Times New Roman", Times, serif;
}

.yes:hover {

}

.register {
  cursor: pointer;
}

.register:hover {
  border-bottom: 1px solid black;
}

/*205,207,208*/
</style>
