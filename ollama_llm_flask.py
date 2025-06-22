from flask import Flask, render_template, request, jsonify
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_community.llms import Ollama
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Optional, helpful if frontend and backend are on different ports

# Initialize the LLM
llm = Ollama(model="llama2")
output_parser = StrOutputParser()
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful AI assistant. Your name is Chatc Assistant."),
    ("user", "User query: {query}")
])
chain = prompt | llm | output_parser

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_query = request.json.get('query')
    
    # Debugging/Logging - Print user input
    print(f"[User]: {user_query}")
    
    # Process query
    response = chain.invoke({"query": user_query})
    
    # Debugging/Logging - Print bot response
    print(f"[Chatc Assistant]: {response}")
    
    return jsonify({"response": response})

if __name__ == '__main__':
    app.run(debug=True)
