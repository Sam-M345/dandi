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
      <h2 className="text-2xl font-bold mb-4">API Playground 2</h2>
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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l5.5-5.5a1 1 0 0 0 0-1.414L10.415 3.207a1 1 0 0 0-1.414 0L8.746 3.46 13.793 8.5l-1.647 1.646a.5.5 0 0 1-.708 0L8.746 7.455l-2.293 2.293a.5.5 0 0 1 0 .708l2.293 2.293z" clipRule="evenodd" />
              </svg>
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

