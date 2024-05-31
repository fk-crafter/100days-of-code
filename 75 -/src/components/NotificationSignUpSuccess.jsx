import React, { useState } from 'react';

const NotificationSignUpSuccess = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!message || !isVisible) return null;

  const notificationStyle = type === 'success'
    ? 'bg-green-100 border-green-400 text-green-700'
    : 'bg-red-100 border-red-400 text-red-700';

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className={`border-l-4 p-4 fixed top-0 right-0 m-4 w-1/3 ${notificationStyle} flex justify-between items-center`}>
      <p>{message}</p>
      <button onClick={handleClose} className="text-lg font-bold ml-4">×</button>
    </div>
  );
};

export default NotificationSignUpSuccess;
