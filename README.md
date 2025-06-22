# 🧠 Chatc Assistant - AI Chatbot with Flask & OpenAI (Deployable on Render)

Chatc Assistant is a simple web-based chatbot using Flask, HTML/CSS/JS frontend, and OpenAI GPT-3.5/4 for real-time conversation. This project is deployed on Render (free cloud hosting).

---

## 🧠 Features

* Conversational chatbot using OpenAI LLM
* Modern UI with Tailwind CSS
* Chat history stored in browser (localStorage)
* Flask backend API
* Easy to deploy on Render

---

## 🌐 Live Demo

> \[🔗 https://chatc-assistant.onrender.com]

---

## 📁 Folder Structure

```
project/
│
├── ollama_llm_flask.py       # Flask backend
├── requirements.txt          # Python dependencies
├── Procfile                  # Tells Render how to run app
│
├── templates/
│   └── index.html            # Frontend HTML
│
├── static/
│   ├── styles.css            # Styling
│   └── chat.js               # Chat logic
```

---

## 🛠️ Installation (Local Testing)

```bash
git clone https://github.com/your-username/chatc-assistant.git
cd chatc-assistant

# Create a virtual environment (optional)
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows

# Install dependencies
pip install -r requirements.txt

# Add your OpenAI API key
export OPENAI_API_KEY='your_key_here'  # Use .env in development

# Run the app
python ollama_llm_flask.py
```

Go to `http://localhost:5000` to test.

---

## 🚀 Deployment on Render (Free Cloud Hosting)

### 1. Push this project to GitHub

Make sure it includes:

* `requirements.txt`
* `Procfile`
* `templates/index.html`
* `static/` folder
* Updated `ollama_llm_flask.py`

### 2. Sign in to \[[Render.com](https://render.com)]\([https://render.com](https://render.com))

### 3. Create New → Web Service

* Connect your GitHub repo
* Build Command: `pip install -r requirements.txt`
* Start Command: `python ollama_llm_flask.py`
* Environment: Python 3.x
* Instance Type: Free

### 4. Set Environment Variables

In Render dashboard → **Environment** tab:

```
Key: OPENAI_API_KEY
Value: your_openai_key_here
```

---

## 🧠 Using OpenAI (Instead of Ollama)

### Replace this in `ollama_llm_flask.py`:

```python
from langchain.chat_models import ChatOpenAI
llm = ChatOpenAI(model_name="gpt-3.5-turbo", openai_api_key=os.environ["OPENAI_API_KEY"])
```

That’s all. The chatbot will now respond using GPT-3.5!

---

## ✅ requirements.txt (Make Sure It Has These)

```txt
flask
flask-cors
langchain
openai
```

---

## ⚠️ Notes

* Don't push your API key to GitHub!
* Use `.env` locally and environment variables on Render
* GPT-3.5 is fast and works great on the free tier

---

## 📩 Contact

Made by [Manoj R] | B.Tech Student | Cloud & AI Enthusiast 🌩️
