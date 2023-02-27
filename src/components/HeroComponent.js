import React from "react";

export default function HeroComponent() {
  return (
    <div className="hero-component">
      <img className="hero-image" src="/images/hero-image.png" alt="logo" />

      <div className="experiences">
        <header className="experiences-header">Online Experiences</header>
        <div className="experiences-text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </div>
      </div>
    </div>
  );
}
