import React, { useState } from 'react';
import axios from 'axios';

const URLDuplicationTool = () => {
  const [urls, setUrls] = useState('');
  const [uniqueUrls, setUniqueUrls] = useState([]);

  const handleDeduplicate = async () => {
    const urlList = urls.split('\n').filter((url) => url.trim() !== '');
    const response = await axios.post('https://rirm-assignment-backend.vercel.app/duplicate-urls', { urls: urlList });
    setUniqueUrls(response.data.uniqueUrls);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">URL Deduplication Tool</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="10"
        placeholder="Enter URLs (one per line)"
        value={urls}
        onChange={(e) => setUrls(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleDeduplicate}
      >
        Remove Duplicates
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Unique URLs:</h2>
        <ul>
          {uniqueUrls.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default URLDuplicationTool;