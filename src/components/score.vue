<template>
  <div id="main" style="height:100% ">

  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import {onMounted, onUpdated, reactive, ref} from "vue";

const props = defineProps(
    {
      value1: null
    }
)

const changeData = () => {
  return [
    {value: props.value1[0], name: '基础能力'},
    {value: props.value1[1], name: '管理效率'},
    {value: props.value1[2], name: '项目效益'},
    {value: props.value1[3], name: '企业成长'},
    {value: props.value1[4], name: '创新发展'}
  ]
}


const changeDatas = () => {

}
let option;
let chartDom;
let myChart;
onUpdated(() => {
  // console.log(option)
  option.data = changeData();
  myChart.setOption(option);

  var option1 = myChart.getOption();
  option1.series[0].data = changeData();
  myChart.setOption(option1);
})

onMounted(() => {

  // console.log(props.value1)
  chartDom = document.getElementById('main');
  myChart = echarts.init(chartDom);


  option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: changeData()
      }
    ]
  };

  option && myChart.setOption(option);
})


</script>

<style scoped>

</style>
