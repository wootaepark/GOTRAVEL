import React from 'react';
import './Recommendations.css';

const Recommendations = () => {
  return (
    <section className="recommendations">
      <h2>Recommended Trips</h2>
      <div className="recommendation-list">
        <div className="recommendation-item">Romantic Getaway in Venice</div>
        <div className="recommendation-item">Adventure in the Swiss Alps</div>
        <div className="recommendation-item">Beach Relaxation in the Maldives</div>
      </div>
    </section>
  );
}

export default Recommendations;
