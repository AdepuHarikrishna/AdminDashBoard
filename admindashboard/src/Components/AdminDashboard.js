// AdminDashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {/* Render your table here */}
    </div>
  );
};

export default AdminDashboard;
