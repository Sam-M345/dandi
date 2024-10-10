'use client';
import { useState, useEffect } from 'react';

export default function APIKeyManagement() {
  const [apiKeys, setApiKeys] = useState([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [newKeyValue, setNewKeyValue] = useState('');
  const [isEnteringValue, setIsEnteringValue] = useState(false);
  const [editingKey, setEditingKey] = useState(null);
  const [visibleKeys, setVisibleKeys] = useState({});

  const handleCreateKey = () => {
    if (editingKey) {
      handleUpdate();
    } else if (newKeyName.trim()) {
      const newKey = {
        id: Date.now(),
        name: newKeyName.trim(),
        key: 'tvly-' + Math.random().toString(36).substr(2, 32)
      };
      setApiKeys([...apiKeys, newKey]);
      setNewKeyName('');
      setIsEnteringValue(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isEnteringValue) {
      handleCreateKey();
    }
  };

  const handleEdit = (id) => {
    const keyToEdit = apiKeys.find(key => key.id === id);
    if (keyToEdit) {
      setEditingKey(keyToEdit);
      setNewKeyName(keyToEdit.name);
      setNewKeyValue(keyToEdit.key);
      setIsEnteringValue(true);
    }
  };

  const handleUpdate = () => {
    if (editingKey && newKeyName.trim() && newKeyValue.trim()) {
      const updatedKeys = apiKeys.map(key => 
        key.id === editingKey.id ? { ...key, name: newKeyName.trim(), key: newKeyValue.trim() } : key
      );
      setApiKeys(updatedKeys);
      setEditingKey(null);
      setNewKeyName('');
      setNewKeyValue('');
      setIsEnteringValue(false);
    }
  };

  const handleDelete = (id) => {
    const updatedKeys = apiKeys.filter(key => key.id !== id);
    setApiKeys(updatedKeys);
  };

  const toggleKeyVisibility = (id) => {
    setVisibleKeys(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      
      {/* Current Plan Card */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-6 mb-8 text-white">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold">CURRENT PLAN</span>
          <button className="bg-white text-purple-600 px-3 py-1 rounded text-sm">Manage Plan</button>
        </div>
        <h2 className="text-3xl font-bold mb-4">Researcher</h2>
        <div>
          <span className="text-sm font-semibold">API Limit</span>
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-2">
            <div className="bg-white rounded-full h-2" style={{ width: '2.4%' }}></div>
          </div>
          <span className="text-sm mt-1 inline-block">24/1,000 Requests</span>
        </div>
      </div>

      {/* API Keys Section */}
      <div className="bg-white rounded-lg p-6 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">API Keys</h2>
          <button 
            onClick={() => setIsEnteringValue(true)}
            className="text-blue-500 hover:text-blue-700"
          >
            + Add New Key
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          The key is used to authenticate your requests to the Research API. To learn more, see the documentation page.
        </p>
        
        {/* API Key Table */}
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="pb-2">NAME</th>
              <th className="pb-2">USAGE</th>
              <th className="pb-2">KEY</th>
              <th className="pb-2">OPTIONS</th>
            </tr>
          </thead>
          <tbody>
            {apiKeys.map((apiKey) => (
              <tr key={apiKey.id} className="border-b">
                <td className="py-3">{apiKey.name}</td>
                <td className="py-3">0</td>
                <td className="py-3">
                  {visibleKeys[apiKey.id] ? apiKey.key : 'tvly-********************************'}
                </td>
                <td className="py-3 flex space-x-2">
                  <button 
                    onClick={() => toggleKeyVisibility(apiKey.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {visibleKeys[apiKey.id] ? '🙈' : '👁️'}
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">📋</button>
                  <button 
                    onClick={() => handleEdit(apiKey.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✏️
                  </button>
                  <button 
                    onClick={() => handleDelete(apiKey.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Key Modal */}
      {isEnteringValue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">{editingKey ? 'Edit API Key' : 'Add New API Key'}</h2>
            <input
              type="text"
              value={newKeyName}
              onChange={(e) => setNewKeyName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter key name"
              className="w-full border rounded px-3 py-2 mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setIsEnteringValue(false);
                  setEditingKey(null);
                  setNewKeyName('');
                }}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateKey}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                {editingKey ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}