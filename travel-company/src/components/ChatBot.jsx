import { useState, useEffect, useRef } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Welcome to A1 Travel! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const botReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("package"))
      return "We offer Goa, Kashmir,Agra,Manali,Mumbai,Shimla, Andaman Island, Darjeeling,Kerala & Rajasthan tour packages 🇮🇳";
    if (msg.includes("price"))
      return "Our packages start from ₹15,000 depending on destination.";
    if (msg.includes("goa"))
      return "Goa package: 5 Days / 4 Nights starting from ₹18,000 🌴";
    if (msg.includes("contact"))
      return "You can call us at 📞 9938767653";
    if (msg.includes("book"))
      return "Sure 😊 Please tell me your destination and travel dates.";

    return "Thanks for your message! Our travel expert will assist you shortly ✨";
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    const userMsg = { from: "user", text };
    const reply = { from: "bot", text: botReply(text) };

    setMessages((prev) => [...prev, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <div className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Box */}
      {open && (
        <div className="chat-box">
          <div className="chat-header">
            A1 Travel Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="quick-replies">
            <button onClick={() => sendMessage("Packages")}>Packages</button>
            <button onClick={() => sendMessage("Price")}>Price</button>
            <button onClick={() => sendMessage("Contact")}>Contact</button>
          </div>

          {/* Input */}
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
