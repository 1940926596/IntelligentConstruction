<template>
  <div class="main">
    <content1 text1="采用神经网络进行聚类分析" text2="保证结果的准确性" text3="聚类分析" img="img_1.png"/>
    <content1 text1="采用神经网络进行风险预警" text2="为你的企业保驾护航" text3="风险预警" img="img_2.png"/>
    <content1 text1="采用神经网络进行预测分析" text2="预测企业目前状态" text3="预测分析" img="img_3.png"/>
    <content1 text1="采用神经网络进行全景画像" text2="构建企业未来蓝图" text3="全景画像" img="img_4.png"/>
  </div>


</template>

<script setup>
import Content1 from "@/components/content1.vue";

const props = defineProps(
    {
      foo:String
    }
)

console.log(props.foo)
</script>


<style scoped>
.main{
  margin-top: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
