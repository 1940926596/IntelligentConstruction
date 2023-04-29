<template>
  <div class="main3">
    <div class="main4">

      <div class="left">

      </div>

      <div class="right">
        <score :value1="values1"/>
      </div>
    </div>

  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import * as echarts from "echarts";
import Score from "@/components/score.vue";

console.log(11111)

let values1 = ref([1, 2, 3, 4, 5, 6])

let hello = ref(1)
let click = () => {
  console.log(111)
  hello.value = 2;
}

let params1 = (i) => {
  return [(40 - i) * 10,
    (38 - i) * 4 + 60,
    i * 5 + 10,
    i * 9,
    i * 5 - 10,
    (i * i) / 2]
}


onMounted(() => {
  var chartDom = document.getElementById('left1');
  let myChart = echarts.init(chartDom);
  let option;

  console.log(444444)
  option = {
    title: {
      text: '企业雷达评估图',
      // subtext: 'Data',
      top: 10,
      left: 10
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      type: 'scroll',
      bottom: 10,
      data: (function () {
        let list = [];
        for (let i = 1; i <= 28; i++) {
          list.push(i + 2000 + '');
        }
        return list;
      })()
    },
    visualMap: {
      top: 'middle',
      right: 10,
      color: ['red', 'yellow'],
      calculable: true
    },
    radar: {
      indicator: [
        {text: '基础能力', max: 400},
        {text: '管理效率', max: 400},
        {text: '项目效益', max: 400},
        {text: '企业成长', max: 400},
        {text: '创新发展', max: 400},
        {text: '信用风险', max: 400}
      ]
    },
    series: (function () {
      var series = [];
      for (var i = 1; i <= 28; i++) {
        series.push({
          type: 'radar',
          symbol: 'none',
          lineStyle: {
            width: 1
          },
          emphasis: {
            areaStyle: {
              color: 'rgba(0,250,0,0.3)'
            }
          },
          data: [
            {
              value: params1(i),
              name: i + 2000 + ''
            }
          ]
        });
      }
      return series;
    })()
  };


  option && myChart.setOption(option);

  myChart.on('click', function (params) {
    let paraId = params.componentIndex;
    console.log(params)
    values1.value = params1(paraId + 1);
    console.log(values1.value)
  });


})


</script>

<style scoped>
.main3 {
  height: 100%;
  width: 90%;
  /*border: 1px solid red;*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.main4 {
  height: 100%;
  width: 100%;
  /*border: 2px solid salmon;*/
  display: flex;
}

.left {
  height: 100%;
  width: 60%;
  /*border: 1px solid aqua;*/
  /*background-color: rgba(240, 240, 240, 1);*/
}

.right {
  height: 100%;
  width: 40%;
  /*border: 2px solid moccasin;*/
  margin-top: 50px;
}
</style>
