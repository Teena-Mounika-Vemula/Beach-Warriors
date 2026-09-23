const express = require('express');
const cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const systemPrompt = `
You are BeachBot, an expert assistant for the Beach Warriors app. You ONLY answer questions related to:
– Beach cleanups
– Marine conservation
– Volunteer signup, events, attendance
– Dashboard features, avatars, badges, points
– Organiser tools, maps, AI tools (waste classifier, reminders)

After every response, suggest 2 to 3 **helpful next user messages** (short phrases). Respond in this JSON format:

{
  "reply": "main reply text",
  "suggestions": ["suggestion 1", "suggestion 2", "suggestion 3"]
}

If asked something unrelated, respond with:
{
  "reply": "I'm here to help with Beach Warriors–related topics only.",
  "suggestions": ["Start Over", "Show Beach Features", "Help"]
}
`;


app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;

  const requestBody = {
    model: "llama3-8b-8192", 
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage }
    ],
    temperature: 0.7,
    max_tokens: 1024
  };

  try {
    console.log(" API Key loaded:", process.env.GROQ_API_KEY);
    const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    const data = await groqResponse.json();
    console.log(" Groq response:", JSON.stringify(data, null, 2));

    if (!data || !data.choices || !data.choices[0]?.message?.content) {
      console.error(" Invalid Groq response:", JSON.stringify(data, null, 2));
      return res.status(500).json({ reply: " Groq didn't send a valid message." });
    }

    const modelReply = data.choices[0].message.content;

     try {  
          const parsed = JSON.parse(modelReply);
          res.json({
            reply: parsed.reply,
          suggestions: parsed.suggestions || [],
          });
    } catch (parseErr) {
          console.warn(" Couldn't parse JSON from model, fallback to plain text.");
          res.json({
          reply: modelReply,
          suggestions: [],
          });
    }

  } catch (err) {
    console.error(" Groq API error:", err);
    res.status(500).json({ error: "Groq API failed" });
  }
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(` BeachBot (Groq) running at http://localhost:${PORT}`);
});
