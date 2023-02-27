import React from "react";

export default function Card(prop) {
  return (
    <div className="card-container">
      <img src={`/images/${prop.coverImg}`} alt="card" className="card-image" />
      <div className="card-details">
        <img src="/images/star.png" alt="star" className="star" />
        <div className="rating">{prop.rating}</div>
        <div className="review-count">({prop.reviewCount}) • </div>
        <div className="country">{prop.location}</div>
      </div>
      <div className="card-title">{prop.title}</div>
      <div className="cost-per-person">
        <span className="cost">{prop.price}</span>
        <span> / person</span>
      </div>
    </div>
  );
}
