import { useEffect, useRef } from "react";

export default function ChatBubble({ messages, username }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const formatTimestamp = (timestamp) => {
		const date = new Date(timestamp);
		return date.toLocaleString("tr-TR", {
		  day: "2-digit",
		  month: "long",
		  year: "numeric",
		  hour: "2-digit",
		  minute: "2-digit",
		});
  };


  return (
    <div
      className="h-[410px] overflow-y-auto p-4 space-y-4 bg-gray-100 rounded-md"
      style={{ scrollbarWidth: "thin" }}
    >
      {messages?.map((msg) => {
        const isMe = msg.author.username === username;
        return (
          <div
            key={msg.id}
            className={`chat ${isMe ? "chat-start" : "chat-end"}`}
          >
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt={`${msg.author.username} avatar`}
                  src={`https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.webp`}
                />
              </div>
            </div>
            <div className="chat-header">
              {msg.author.username}
              <time className="text-xs opacity-50 ml-2">
                {formatTimestamp(msg.timestamp)}
              </time>
            </div>
            <div className="chat-bubble">{msg.content}</div>
            
          </div>
        );
      })}
      <div ref={messagesEndRef} />
    </div>
  );
}
