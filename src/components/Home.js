import React from 'react';
import { Redirect } from 'react-router-dom';

function Home({ isLoggedIn }) {
  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
}

export default Home;
