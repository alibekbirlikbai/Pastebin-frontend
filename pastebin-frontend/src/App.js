import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/pastbin/bins');
      const jsonData = await response.json();
      console.log('Received data:', jsonData); // Log received data
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(bin => (
          <li key={bin.id}>{bin.url}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
