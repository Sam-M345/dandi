import React from 'react';

const Notification = ({ message, type }) => {
  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed top-60 right-400 ${bgColor} text-white px-4 py-2 rounded shadow-lg`}>
      {message}
    </div>
  );
};

export default Notification;

