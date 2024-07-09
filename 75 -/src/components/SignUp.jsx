import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import NotificationSignUpSuccess from './NotificationSignUpSuccess';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simuler une requête d'inscription réussie
    setSuccess('Account created successfully, you will be redirected to the home page!');
    setError('');
    setShowNotification(true);

    // réinitialiser les champs du formulaire
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });

    // fermer la notification après 5 secondes et rediriger vers la page d'accueil
    setTimeout(() => {
      setSuccess('');
      setShowNotification(false);
      navigate('/'); // rediriger vers la page d'accueil
    }, 5000);
  };

  const backgroundStyle = {
    backgroundColor: '#EFEEEC'
  };

  return (
    <div style={backgroundStyle} className="bg-gray-100 min-h-screen flex justify-center items-center">
      {showNotification && (
        <NotificationSignUpSuccess message={error || success} type={error ? 'error' : 'success'} />
      )}
      <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
            <input
              className="border border-grey-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password:</label>
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-emerald-300 transition-shadow shadow-md"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="sign-up-btn text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-300"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
