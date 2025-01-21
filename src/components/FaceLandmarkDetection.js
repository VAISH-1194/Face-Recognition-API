import React, { useState } from 'react';
import axios from 'axios';

const FaceLandmarkDetection = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', image);

    try {
      const response = await axios.post('/api/landmark', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Face Landmark Detection</h2>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Detect</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
};

export default FaceLandmarkDetection;
