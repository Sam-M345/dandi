'use client';
import { useState } from 'react';
import Notification from '../components/Notification';

export default function Playground() {
  const [apiKey, setApiKey] = useState('');
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/validate-key', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ apiKey }),
      });

      if (response.ok) {
        setNotification({ message: 'Valid API key', type: 'success' });
      } else {
        setNotification({ message: 'Invalid API Key', type: 'error' });
      }
    } catch (error) {
      console.error('Error:', error);
      setNotification({ message: 'An error occurred', type: 'error' });
    }
  };

  const handleClearApiKey = () => {
    setApiKey('');
    setNotification(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">API Playground</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div className="relative">
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">
            Enter API Key
          </label>
          <div className="flex items-center">
            <input
              id="apiKey"
              name="apiKey"
              type="text"
              required
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="button"
              onClick={handleClearApiKey}
              className="px-3 py-2 border border-gray-300 border-l-0 rounded-r-md shadow-sm text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              title="Clear API Key"
            >
              X
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  );
}


// just a comment 123  4



