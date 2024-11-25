import React from 'react';
import homepageImage from './assets/hms.webp'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={homepageImage} 
          alt="Homepage" 
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }} 
        />
      </header>
    </div>
  );
}

export default Home;
