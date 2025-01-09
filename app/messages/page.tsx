"use client";
import { useState } from 'react';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  // Dummy data for conversations
  const conversations = [
    { id: 1, name: "ESPN", lastMessage: "Interested in your sports content", time: "12:30 PM", unread: true, type: "Content Owner" },
    { id: 2, name: "Gaming Stream Pro", lastMessage: "Campaign details look good", time: "11:45 AM", unread: false, type: "Creator" },
    { id: 3, name: "Netflix", lastMessage: "Let's discuss the proposal", time: "Yesterday", unread: false, type: "Content Owner" },
    { id: 4, name: "TwitchStar123", lastMessage: "Thanks for reaching out", time: "Yesterday", unread: true, type: "Creator" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-lg flex flex-col h-full">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Ctreaming</h1>
        </div>
        
        {/* Main Menu Items */}
        <div className="p-4 flex-1">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/campaigns">Campaigns</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/discover">Discover</a>
            </li>
            <li className="p-2 bg-blue-100 rounded-md cursor-pointer">
              <a href="/messages">Messages</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/profile">Profile</a>
            </li>
          </ul>
        </div>

        {/* Settings at Bottom */}
        <div className="border-t p-4">
          <ul>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/settings">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

       {/* Messages Interface */}
       <div className="flex flex-1">
        {/* Conversations List */}
        <div className="w-80 bg-white border-r">
          {/* New Message Button */}
          <div className="p-4 border-b">
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
              New Message
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Conversations */}
          <div className="overflow-y-auto">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => setSelectedChat(chat.id)}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedChat === chat.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{chat.lastMessage}</p>
                <span className="text-xs text-gray-500">{chat.type}</span>
                {chat.unread && (
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        {selectedChat ? (
          <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="p-4 border-b">
              <h2 className="font-semibold">
                {conversations.find(c => c.id === selectedChat)?.name}
              </h2>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto">
              {/* Messages will go here */}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border rounded-md"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-white">
            <p className="text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}