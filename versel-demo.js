import React, { useState } from 'react';
import { LogIn, User, Lock, X } from 'lucide-react';

// Main component, must be the default export
const App = () => {
  // State for input fields
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  
  // State for the notification message
  const [message, setMessage] = useState(null);
  
  // State for message type (success or error)
  const [messageType, setMessageType] = useState(null); 

  /**
   * Handles the simulated login process.
   * In a real app, this would involve API calls and authentication checks.
   */
  const handleLogin = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous message
    
    // Simple validation: check if both fields are filled
    if (userId.trim() === '' || password.trim() === '') {
      setMessageType('error');
      setMessage('Please enter both User ID and Password.');
      return;
    }

    // Simulate successful login
    setMessageType('success');
    setMessage(`Hello! ${userId}`);
    
    // Clear inputs after simulated login
    setUserId('');
    setPassword('');
  };

  /**
   * Component for displaying the notification banner.
   */
  const Notification = ({ message, type, onClose }) => {
    if (!message) return null;

    const baseStyle = "p-4 rounded-xl shadow-lg flex items-center justify-between transition-all duration-300 transform";
    
    let colorClasses = '';
    let Icon = LogIn;

    if (type === 'success') {
      colorClasses = 'bg-green-100 border-l-4 border-green-500 text-green-800';
      Icon = LogIn;
    } else if (type === 'error') {
      colorClasses = 'bg-red-100 border-l-4 border-red-500 text-red-800';
      Icon = X;
    }

    return (
      <div className={`${baseStyle} ${colorClasses} mt-6 w-full max-w-sm md:max-w-md animate-fadeInDown`}>
        <div className="flex items-center">
          <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button 
          onClick={onClose} 
          className="p-1 rounded-full hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 transition"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 font-inter">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-3xl font-extrabold text-white text-center mb-6">
          Simple Login
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Enter credentials to see the greeting message.
        </p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* User ID Input */}
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-300 mb-1">
              User ID
            </label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                id="userId"
                name="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your username"
                className="block w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                autoComplete="off"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="block w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition duration-150 transform hover:scale-[1.01] active:scale-[0.99]"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      
      {/* Notification Display Area - Centered and below the form */}
      <Notification 
        message={message} 
        type={messageType} 
        onClose={() => setMessage(null)} 
      />
    </div>
  );
};

export default App;
