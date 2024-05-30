import React from 'react';
import './Destinations.css';

const Destinations = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-list">
        <div className="destination-item">Paris</div>
        <div className="destination-item">New York</div>
        <div className="destination-item">Tokyo</div>
      </div>
    </section>
  );
}

export default Destinations;
