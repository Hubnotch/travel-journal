import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import home from '../images/home.jpg'
import '../App.css'

function Journal(props) {
  let images= home || props.imageUrl
    return (
      <article className="journal">
        <img src={images} className="journal--image" alt="home" />
        <section className="journal--details">
          <p className="journal--location">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon"/> {props.location}{" "}
            <a
              href={props.MapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </p>
          <h1>{props.title}</h1>
          <h4>{props.startDate} - {props.endDate}</h4>
          <p className="journal--text">
            {props.description}
          </p>
        </section>
      </article>
    );
}

export default Journal
