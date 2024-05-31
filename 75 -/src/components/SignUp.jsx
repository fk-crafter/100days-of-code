import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import '../index.css';
import NotificationSignUpSuccess from './NotificationSignUpSuccess';  // Assurez-vous que le chemin est correct

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    }, {
      data: { username }
    });

    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setSuccess('Account created successfully!');
      setError('');
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  const backgroundStyle = {
    backgroundColor: '#EFEEEC'
  };

  return (
    <div style={backgroundStyle} className="bg-gray-100 min-h-screen flex justify-center items-center">
      <NotificationSignUpSuccess message={error || success} type={error ? 'error' : 'success'} />
      <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username:</label>
            <input
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
              className="border border-gray-300 rounded-lg py-2 px-4 w-full bg-white bg-opacity-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button className="sign-up-btn text-white py-3 px-6 rounded-lg w-full font-semibold text-lg" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
