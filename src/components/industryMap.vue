<template>
  <div class="main1">
    <div class="head1" :style="{backgroundImage:'url('+require('@/assets/'+img)+')'}">
<!--      background-image:'url('+require('@/assets/'+img)+') no-repeat 30% 20%/ 65% 80%-->
      <div class="text11">{{ text2 }}</div>
    </div>

    <div class="bottom1" :style="{backgroundColor:color}">
      <div v-for="(site, index) in text1" :key="index" class="text21">
        <div>{{site[0]}}</div>
        <div>{{site[1]}}</div>
        <div>{{site[2]}}</div>
      </div>
    </div>

  </div>
</template>

<script setup>

const sites= [
  ['工程造价咨询企业资质等级','工程监理','工程咨询'],['工程设计','企业设立分公司总数','企业首次取得现有造价咨询企业资质时间'],['期末从业人员合计','正式聘用人员','临时工作人员'],['一级注册造价咨询师','二级注册造价工程师','期末其他专业注册执业人员'], ['交通运输工程专业','水利工程专业','土木建筑工程专业'] ,['高级职称人员','中级职称人员','初级职称人员']
]

const props = defineProps({
  text1:[],
  text2: String,
  color:String,
  img: String,
})


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
  overflow: hidden;
  /*background-image: url("../assets/sci1.png");*/
  /*background-repeat: no-repeat;*/
  /*background-size: 100%  auto;*/
  /*border:10px solid rebeccapurple;*/
}

.bottom1{
  padding-top: 10px;

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
