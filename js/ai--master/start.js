require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
    const userPrompt = req.body.prompt;
    
    const apiKey = process.env.ZHIPU_API_KEY ? process.env.ZHIPU_API_KEY.trim() : null;
    // 字符串.trim去除左右两边的空行
    
    console.log("正在尝试调用，Key长度为:", apiKey ? apiKey.length : 0);

    if (!apiKey) {
        return res.status(500).json({ error: "环境变量中没有找到 API_KEY" });
    }

    try {
        const response = await axios({
            method: 'post',
            url: 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
            headers: {
                'Authorization': `Bearer ${apiKey}`, // 确保这里 Bearer 后面有一个空格
                'Content-Type': 'application/json'
            },
            data: {
                model: "glm-5.1",
                messages: [
                    { role: "user", content: userPrompt }
                ],
                temperature:"1.0",
                stream: false
            }
        });

        res.json({
            status: "success",
            reply: response.data.choices[0].message.content
        });

    } catch (error) {
        // 打印更详细的错误
        if (error.response) {
            console.error("智谱响应了错误:", error.response.data);
        } else {
            console.error("请求失败:", error.message);
        }
        res.status(500).json({ error: "调用大模型失败", detail: error.message });
    }
});

app.listen(3000, () => {
    console.log('服务已启动：http://localhost:3000');
});