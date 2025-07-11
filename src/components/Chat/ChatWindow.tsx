import React from 'react';
import { useParams } from 'react-router-dom';

const ChatWindow: React.FC = () => {
  const { requestId } = useParams();
  // TODO: Subscribe to real-time messages for requestId
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Chat (stub for {requestId})</h2>
      {/* Message list and input stub */}
      <div className="bg-gray-100 p-2 rounded mb-2">No messages yet.</div>
      <input className="w-full border p-2 rounded" placeholder="Type a message..." />
    </div>
  );
};

export default ChatWindow;
