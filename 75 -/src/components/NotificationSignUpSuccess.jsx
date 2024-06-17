import React, { useState, useEffect } from 'react';

const NotificationSignUpSuccess = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("NotificationSignUpSuccess mounted");

    if (message) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
        clearTimeout(autoCloseTimer);
      };
    }
  }, [message]);

  if (!message || !isVisible) return null;

  const notificationBgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const loadingBgColor = 'bg-gray-200';
  const borderLeftColor = isLoading ? 'border-gray-200' : 'border-green-400';

  return (
    <div className={`border-l-4 p-4 fixed top-0 right-0 m-4 w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg border-grey-400 text-grey-700 flex flex-col items-start ${isLoading ? loadingBgColor : notificationBgColor} ${borderLeftColor} overflow-hidden`}>
      {isLoading ? (
        <div className="flex items-center p-2 rounded-lg">
          <div className="loader mr-2"></div>
          <p>Loading...</p>
        </div>
      ) : (
        <p>{message}</p>
      )}
      {!isLoading && (
        <div className="w-full mt-2">
          <div className="h-1 bg-green-500 animation-slide"></div>
        </div>
      )}
    </div>
  );
};

export default NotificationSignUpSuccess;
