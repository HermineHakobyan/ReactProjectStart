import React, { useEffect, useState } from 'react';
import "./Middle.css";
const Middle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating an API call to fetch data
    setTimeout(() => {
      const pics = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
      ];
      setData(pics);
    }, 2000);
  }, []);

  return (
    <main className="main">
      {data.length > 0 ? (
        <div className="image-container">
          {data.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
          ))}
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </main>
  );
};

export default Middle;
