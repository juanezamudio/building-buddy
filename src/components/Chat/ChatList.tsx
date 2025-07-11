import React from 'react';

const ChatList: React.FC = () => {
  // TODO: Fetch chat requests from Supabase
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">My Chats</h2>
      {/* Stub chat list */}
      <div className="bg-gray-100 p-2 rounded mb-2">Sample Chat (stub)</div>
    </div>
  );
};

export default ChatList;
