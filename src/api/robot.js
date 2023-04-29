// import fetch from 'node-fetch';

const API_URL = 'https://api.openai.com/v1/';

async function askGPT(question) {
    const response = await fetch(API_URL + 'engines/davinci-codex/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + "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"
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
    const stdin = process.openStdin();
    stdin.addListener('data', async (input) => {
        const question = input.toString().trim();
        const answer = await askGPT(question);
        console.log(answer);
        console.log(''); // 输出空行
        console.log('Chat with GPT:');
    });
}

chatWithGPT();
