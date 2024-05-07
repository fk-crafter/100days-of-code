import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordForm = ({ password }) => {
  const testResult = zxcvbn(password);
  const score = testResult.score;
  const num = (score * 100) / 4;

  const getColor = () => {
    switch (score) {
      case 0:
        return 'gray';
      case 1:
        return 'red';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      case 4:
        return 'green';
      default:
        return '';
    }
  };

  const barStyle = {
    width: `${num}%`,
    background: getColor(),
    height: '7px',
  };

  return (
    <div className="text-center">
      <div className="relative pt-1">
        <div className="overflow-hidden flex rounded bg-gray-600">
          <div style={barStyle}></div>
        </div>
      </div>
      <p className={`text-sm mt-2 text-${getColor()}`}>
        {['Very Weak', 'Weak', 'Medium', 'Good', 'Strong'][score]}
      </p>
    </div>
  );
};

export default PasswordForm;