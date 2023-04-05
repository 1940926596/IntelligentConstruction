<template>
  <div class="main">
    <industry-map img="sci1.png" text2="工程监理" color="rgb(239,246,252)" :text1="dist1"></industry-map>
    <industry-map img="sci2.png" text2="工程设计" color="rgb(254,249,255)" :text1="dist2"></industry-map>
    <industry-map img="sci3.png" text2="工作人员" color="rgb(236,250,253)" :text1="dist3"></industry-map>
    <industry-map img="sci4.png" text2="造价咨询" color="rgb(244,242,253)" :text1="dist4"></industry-map>
  </div>
</template>

<script setup>
import IndustryMap from "@/components/industryMap.vue";
import {reactive, ref} from "vue";

const dist1=[['资讯等级','工程咨询','工程设计'],['分公司数','从业人员','水利工程'],['土建工程','安装工程','交运工程'],['前期咨询','实施咨询','结算咨询'],]
const dist2=[['房建工程','市政工程','公路工程'],['高级职称','中级职称','初级职称'],['航空工程','火电工程','水电工程'],['应付薪酬','资产合计','负债合计'],]
const dist3=[['石化工程','化工工程','农业工程'],['前期咨询','实施咨询','结算咨询'],['招标代理','项目管理','工程咨询'],['勘察设计','会计审计','银行金融']]
const dist4=[['营业成本','税金附加','管理费用'],['应付薪酬','资产合计','负债合计'],['销售费用','财务费用','利息支出'],['投资利益','累计折旧','政府补助']]


</script>

<style scoped>
.main {
  /*border:5px solid red;*/
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-around;
}
</style>
