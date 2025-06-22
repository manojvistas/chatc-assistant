function saveToHistory(sender, message) {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  history.push({ sender, message });
  localStorage.setItem('chatHistory', JSON.stringify(history));
}

function loadChatHistory() {
  const history = JSON.parse(localStorage.getItem('chatHistory')) || [];
  const chatArea = document.getElementById('chatArea');
  history.forEach(({ sender, message }) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'flex justify-end' : 'flex';
    msgDiv.innerHTML = `<div class="message ${sender === 'user' ? 'user-message' : 'bot-message'}">${message}</div>`;
    chatArea.appendChild(msgDiv);
  });
}

async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (message === '') return;
  
    const chatArea = document.getElementById('chatArea');
  
    const userMsg = document.createElement('div');
    userMsg.className = 'flex justify-end';
    userMsg.innerHTML = `<div class="message user-message">${message}</div>`;
    chatArea.appendChild(userMsg);
  
    input.value = '';
  
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'flex justify-start';
    typingIndicator.innerHTML = `<div class="message bot-message">🤖 Typing...</div>`;
    chatArea.appendChild(typingIndicator);
  
    chatArea.scrollTop = chatArea.scrollHeight;
  
    try {
      // ✅ POST request to Flask backend
      const response = await fetch('/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: message })
      });
  
      const data = await response.json();
  
      typingIndicator.remove();
  
      const botReply = document.createElement('div');
      botReply.className = 'flex';
      botReply.innerHTML = `<div class="message bot-message">🤖 ${data.response}</div>`;
      chatArea.appendChild(botReply);
  
      chatArea.scrollTop = chatArea.scrollHeight;
  
    } catch (error) {
      typingIndicator.remove();
      const errorMsg = document.createElement('div');
      errorMsg.className = 'flex';
      errorMsg.innerHTML = `<div class="message bot-message text-red-500">⚠️ Error: ${error.message}</div>`;
      chatArea.appendChild(errorMsg);
    }
  }
  window.onload = () => {
    document.getElementById('userInput').focus();
    loadChatHistory(); // load history when refreshed
  };
  saveToHistory('user', message); // after user's message
  
  saveToHistory('bot', data.response); // after bot's message
    
