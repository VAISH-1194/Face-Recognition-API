import React, { useState } from 'react';
import axios from 'axios';

const MatchComparison = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange1 = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImageChange2 = (e) => {
    setImage2(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file1', image1);
    formData.append('file2', image2);

    try {
      const response = await axios.post('/api/match', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Match Comparison & Detection</h2>
      <input type="file" onChange={handleImageChange1} />
      <input type="file" onChange={handleImageChange2} />
      <button onClick={handleSubmit}>Compare</button>
      {result && <p>Match: {result.match}</p>}
    </div>
  );
};

export default MatchComparison;
