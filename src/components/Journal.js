import React from 'react'
import home from '../images/home.jpg'
import '../App.css'

function Journal() {
    return (
      <article className="journal">
        <img src={home} className="journal--image" alt="home" />
        <section className="journal--details">
          <p className="journal--location">
            <span>icon</span> JAPAN{" "}
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
          <h1>Mount Fuji</h1>
          <h4>12 Jan,2021 - 24 Jan, 2021</h4>
          <p className="journal--text">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </section>
      </article>
    );
}

export default Journal
