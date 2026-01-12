import { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Welcome to IndiaTrips! How can I help you?" }
  ]);
  const [input, setInput] = useState("");

  const botReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("package")) return "We offer tour packages all over India 🇮🇳";
    if (msg.includes("price")) return "Prices start from ₹15,000 depending on destination.";
    if (msg.includes("goa")) return "Goa package: 5 Days / 4 Nights starting ₹18,000";
    if (msg.includes("contact")) return "You can call us at 9938069896 📞";
    if (msg.includes("booking")) return "Please share your destination & travel dates.";
    return "Thank you! Our travel expert will contact you soon 😊";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const reply = { from: "bot", text: botReply(input) };

    setMessages([...messages, userMsg, reply]);
    setInput("");
  };

  return (
    <>
      <div className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            Travel Chat
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
