import { useEffect, useState } from "react";

// Fetch last completion from the server
const fetchLastCompletion = async () => {
    const res = await fetch("http://localhost:8080/api/last-completion");
    const data = await res.json();
    return data.text;
  };
  
  // Send a chat prompt to the server and get the response from OpenAI
  const sendChatPrompt = async (prompt: any) => {
    const res = await fetch("http://localhost:8080/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    return data.text;
  };
  
  const Chat = () => {
    const [chatHistory, setChatHistory] = useState<any[]>([]);
    const [userInput, setUserInput] = useState('');
  
    useEffect(() => {
      // Fetch the last completion when the component mounts
      fetchLastCompletion().then((text) => {
        setChatHistory([{ type: 'bot', text }]);
      });
    }, []);
  
    const handleSubmit = async () => {
      // Add the user's message to the chat history
      setChatHistory([...chatHistory, { type: 'user', text: userInput }]);
      setUserInput('');
  
      // Fetch the response from the bot
      const chatResponse = await sendChatPrompt(userInput);
      
      // Add the bot's message to the chat history
      setChatHistory([...chatHistory, { type: 'user', text: userInput }, { type: 'bot', text: chatResponse }]);
    };
  
    return (
      <div className="flex flex-col h-full w-full">
        <div className="bg-blue-500 mt-10 p-4 text-white">
          <h1>ChemAI</h1>
        </div>
  
        {/* Quicklink questions */}
        <div className="bg-gray-100 p-2 flex flex-col">
          <button className="mr-4" onClick={() => setUserInput('What is an atom?')}>What is an atom?</button>
          <button onClick={() => setUserInput('Tell me about electrons.')}>Tell me about electrons.</button>
        </div>
  
        {/* Chat history */}
        <div className="flex-1 overflow-y-auto p-4 h-96 max-h-full">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`${msg.type === 'user' ? 'bg-blue-200' : 'bg-gray-300'} p-2 rounded-lg inline-block`}>
                {msg.text}
              </span>
            </div>
          ))}
        </div>
  
        {/* User input */}
        <div className="bg-gray-200 p-4 flex items-center justify-between">
          <input 
            type="text"
            className="border rounded p-2 w-full"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') handleSubmit(); }}
          />
          <button className="ml-2 bg-blue-500 text-white p-2 rounded" onClick={handleSubmit}>Send</button>
        </div>
      </div>
    );
  };
  
  export default Chat;