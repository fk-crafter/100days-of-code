import React, { useState } from 'react';
import Lottie from 'lottie-react';
import validationAnimation from '../assets/Animation - 1721659836008.json'; // Update with your Lottie animation file path

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showAnimation, setShowAnimation] = useState(false);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    setShowAnimation(true);
    setTimeout(() => {
      alert('Finished!');
      setShowAnimation(false);
    }, 3000); // Duration for the animation to complete
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">

      <div className={`p-6 mb-4 border rounded-lg transition-opacity duration-500 ${currentStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= 1 ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
            1
          </div>
          <div className="ml-4 text-lg font-semibold">Lorem ipsum</div>
        </div>
        {currentStep === 1 && (
          <div className="mt-4 text-gray-800">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis sed provident officia eveniet quae qui vel ullam harum iusto.</p>
            <button onClick={nextStep} className="mt-4 px-4 py-2 bg-teal-600 text-white rounded">Continue</button>
          </div>
        )}
      </div>

      <div className={`p-6 mb-4 border rounded-lg transition-opacity duration-500 ${currentStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= 2 ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
            2
          </div>
          <div className="ml-4 text-lg font-semibold">Lorem ipsum</div>
        </div>
        {currentStep === 2 && (
          <div className="mt-4 text-gray-800">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis sed provident officia eveniet quae qui vel ullam harum iusto.</p>
            <button onClick={nextStep} className="mt-4 px-4 py-2 bg-teal-600 text-white rounded">Continue</button>
            <button onClick={prevStep} className="mt-4 ml-2 px-4 py-2 bg-gray-400 text-gray-800 rounded">Back</button>
          </div>
        )}
      </div>

      <div className={`p-6 mb-4 border rounded-lg transition-opacity duration-500 ${currentStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center">
          <div className={`w-8 h-8 flex items-center justify-center rounded-full ${currentStep >= 3 ? 'bg-teal-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
            3
          </div>
          <div className="ml-4 text-lg font-semibold">Lorem ipsum</div>
        </div>
        {currentStep === 3 && (
          <div className="mt-4 text-gray-800">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est perspiciatis sed provident officia eveniet quae qui vel ullam harum iusto.</p>
            <button onClick={prevStep} className="mt-4 ml-2 px-4 py-2 bg-gray-400 text-gray-800 rounded">Back</button>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleFinish}
          disabled={currentStep !== 3}
          className={`px-6 py-3 rounded-full shadow-lg transform transition duration-500 ${currentStep === 3 ? 'bg-teal-600 text-white hover:scale-105 hover:shadow-teal-600/50 animate-glow' : 'bg-gray-400 text-gray-800 cursor-not-allowed'}`}
        >
          Finish
        </button>
      </div>

      {showAnimation && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Lottie animationData={validationAnimation} style={{ width: 300, height: 300 }} />
        </div>
      )}
    </div>
  );
};

export default Stepper;
