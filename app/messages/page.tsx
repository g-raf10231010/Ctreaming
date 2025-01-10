"use client";
import { useState } from 'react';

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [isNewMessageActive, setIsNewMessageActive] = useState(false);

  // Update the conversations data to include user information
  const conversations = [
    {
      id: 1,
      name: "ESPN",
      userName: "John Thompson",
      lastMessage: "Interested in your sports content",
      time: "12:30 PM",
      unread: true,
      type: "Content Owner"
    },
    {
      id: 2,
      name: "Gaming Stream Pro",
      userName: "Sarah Miller",
      lastMessage: "Campaign details look good",
      time: "11:45 AM",
      unread: false,
      type: "Creator"
    },
    { id: 3, name: "Netflix", lastMessage: "Let's discuss the proposal", time: "Yesterday", unread: false, type: "Content Owner" },
    { id: 4, name: "TwitchStar123", lastMessage: "Thanks for reaching out", time: "Yesterday", unread: true, type: "Creator" },
  ];

  const handleNewMessage = () => {
    setIsNewMessageActive(true);
    setSelectedChat(null);
  };

  const NewMessageInterface = () => (
    <div className="flex-1 flex flex-col bg-white">
      <div className="p-4 border-b">
        <h2 className="font-semibold text-gray-900">New Message</h2>
      </div>
      <div className="p-4">
        <input
          type="text"
          placeholder="To: "
          className="w-full p-2 border rounded-md mb-4"
        />
        <textarea
          placeholder="Type your message..."
          className="w-full p-2 border rounded-md h-40 mb-4"
        />
        <input
          type="file"
          className="w-full p-2 border rounded-md mb-4"
        />
        <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
          Send
        </button>
      </div>
    </div>
  );

  const SampleConversation = () => (
    <div className="flex-1 flex flex-col bg-white">
      {/* Chat Header */}
      <div className="p-4 border-b">
        <h2 className="font-semibold text-gray-900">ESPN</h2>
      </div>

      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="mb-4">
          <div className="bg-gray-100 p-3 rounded-md mb-2">
            <p className="text-sm text-gray-900">Hi, we are interested in featuring your sports content on our platform. Could you provide more details about your content?</p>
            <span className="text-xs text-gray-500">12:30 PM</span>
          </div>
          <div className="bg-blue-100 p-3 rounded-md mb-2 self-end">
            <p className="text-sm text-gray-900">Sure, I have a variety of sports content ranging from live games to highlights and analysis. What specific details are you looking for?</p>
            <span className="text-xs text-gray-500">12:32 PM</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-md"
          />
          <input
            type="file"
            className="p-2 border rounded-md"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Send
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <nav className="w-64 bg-white shadow-lg flex flex-col h-full">
        <div className="p-4 border-b">
          <img 
            src="/images/logo.png" 
            alt="Ctreaming Logo"
            className="h-8" // adjust height as needed
          />
        </div>
        
        {/* Main Menu Items */}
        <div className="p-4 flex-1">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/" className="text-gray-900">Dashboard</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/campaigns" className="text-gray-900">Campaigns</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/discover" className="text-gray-900">Discover</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/messages" className="text-gray-900">Messages</a>
            </li>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/profile" className="text-gray-900">Profile</a>
            </li>
          </ul>
        </div>

        {/* Settings at Bottom */}
        <div className="border-t p-4">
          <ul>
            <li className="p-2 hover:bg-blue-50 rounded-md cursor-pointer">
              <a href="/settings" className="text-gray-900">Settings</a>
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
            <button 
              onClick={handleNewMessage}
              className="w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
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

          {/* Update the conversation display in the list */}
          <div className="overflow-y-auto">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => {
                  setSelectedChat(chat.id);
                  setIsNewMessageActive(false);
                }}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedChat === chat.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{chat.name}</h3>
                    <p className="text-xs text-gray-600">{chat.userName}</p>
                  </div>
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

        {/* Chat Window or New Message Interface */}
        {isNewMessageActive ? (
          <NewMessageInterface />
        ) : selectedChat === 1 ? (
          <SampleConversation />
        ) : selectedChat ? (
          <div className="flex-1 flex flex-col bg-white">
            {/* Chat Header */}
            <div className="p-4 border-b">
            <h2 className="font-semibold text-gray-900">
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
                <input
                  type="file"
                  className="p-2 border rounded-md"
                />
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
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
