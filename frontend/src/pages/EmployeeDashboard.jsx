import React, { useState } from 'react';

const CreateRequest = () => {
  const [requestType, setRequestType] = useState('');
  const [assetId, setAssetId] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Prepare the request data
    const requestData = {
      requestType,
      assetId,
      description,
    };

    try {
      // Make API call or perform action here
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // Handle successful request
        alert('Request submitted successfully');
        // Optionally reset the form
        setRequestType('');
        setAssetId('');
        setDescription('');
      } else {
        alert('Failed to submit the request');
      }
    } catch (error) {
      alert('Error submitting request');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Request Type</label>
        <select
          value={requestType}
          onChange={(e) => setRequestType(e.target.value)}
          required
        >
          <option value="">Select Request Type</option>
          <option value="new">New Asset</option>
          <option value="maintenance">Maintenance</option>
          <option value="replacement">Replacement</option>
        </select>
      </div>

      <div>
        <label>Asset ID (if applicable)</label>
        <input
          type="text"
          placeholder="Asset ID (if applicable)"
          value={assetId}
          onChange={(e) => setAssetId(e.target.value)}
        />
      </div>

      <div>
        <label>Description</label>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit">Submit Request</button>
    </form>
  );
};

export default CreateRequest;
npm 