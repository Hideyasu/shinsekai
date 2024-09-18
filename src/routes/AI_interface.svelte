<script>
    let inputText = '';      // ユーザーが入力したテキスト
    let responseText = '';   // AIからの応答
    let loading = false;     // ローディング状態
    const apiKey = 'hogehoge';

    // OpenAI APIにリクエストを送信する関数
    async function getAIResponse() {
        loading = true;  // ローディング状態を開始

        try {
            const res = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{"role": "user", "content": inputText}]
                })
            });

            const data = await res.json();
            responseText = data.choices[0].message.content;  // AIからの応答をセット
        } catch (error) {
            responseText = "Error occurred while fetching AI response.";
            console.error(error);
        } finally {
            loading = false;  // ローディング状態を終了
        }
    }

    // フォームの送信処理
    function handleSubmit() {
        if (inputText.trim() !== '') {
            getAIResponse();  // AIの応答を取得する
        }
    }
</script>

<style>
    .container {
        padding: 1rem;
        font-family: Arial, sans-serif;
    }

    .submit-button {
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .loading {
        color: #888;
    }

    .response-text {
        margin-top: 1rem;
        padding: 1rem;
        background-color: #f0f0f0;
        border-radius: 5px;
    }
</style>

<div class="container">
    <h1>AI Text Response Example</h1>

    <!-- テキスト入力フィールド -->
    <div>
        <input type="text" bind:value={inputText} placeholder="Ask something..." />
        <button class="submit-button" on:click={handleSubmit} disabled={loading}>Submit</button>
    </div>

    <!-- ローディング表示 -->
    {#if loading}
        <p class="loading">AI is thinking...</p>
    {/if}

    <!-- AIの応答を表示 -->
    {#if responseText}
        <div class="response-text">
            <h3>AI Response:</h3>
            <p>{responseText}</p>
        </div>
    {/if}
</div>
