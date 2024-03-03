import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Link to="/app">
        <button>Go to App</button>
      </Link>
    </div>
  );
};

export default Home;
