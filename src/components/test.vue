<template>
  <div style="height: 100%;width: 100%">
    <div class="head">
      <div class="img">

      </div>
<!--      <div style="position:absolute;"> abccc</div>-->
      <img class="img1" src="../assets/loginBackground.png"/>

    </div>
<!--    <img class="img1" src="../assets/loginBackground.png"/>-->
<!--    <div class="bottom">-->
<!--      <button style="height: 20%;width:20%" @click="getData"></button>-->
<!--    </div>-->

  </div>


</template>

<script setup>

const API_URL = 'https://api.openai.com/v1/';
const api_key="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"
async function askGPT(question) {
  const response = await fetch(API_URL + 'engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + api_key,
    },
    body: JSON.stringify({
      prompt: `Code the following function in JavaScript:\n\n${question}\n\nfunction `,
      max_tokens: 1024,
      temperature: 0.7,
      n: 1,
      stop: ['\n'],
    }),
  });

  const { choices } = await response.json();

  return choices[0].text.trim();
}

async function chatWithGPT() {
  console.log('Chat with GPT:');
  while (true) {
    const question = prompt('Enter your question:');
    if (question === null) { // 用户取消了输入
      break;
    }
    const answer = await askGPT(question);
    console.log(answer);
    console.log(''); // 输出空行
    console.log('Chat with GPT:');
  }
}

// chatWithGPT();

</script>

<style scoped>
.head{
  height: 50%;
  width: 100%;
  border:2px solid aqua;
  position: relative;
}

.bottom{
  height: 50%;
  width: 100%;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}

.img{
  background-image: url("../assets/loginBackground.png");
  background-size: 100% 100%;
  border:20px solid red;
  border-radius: 100px;
  height: 100%;
  width: 200px;
  position: absolute;
  z-index: -1;
}

.img1{
  border:10px solid blue;
  border-radius: 100px;
  height: 200px;
  width: auto;
  /*position: absolute;*/
}
</style>
