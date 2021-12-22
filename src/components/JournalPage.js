import React from "react";
import Journal from "./Journal";
import data from "../data.js";
import "../App.css";

function JournalPage() {
  const journey = data.map((country) => {
    return <Journal 
    key={country.location} 
    title={country.title}
    location={country.location}
    MapsUrl={country.googleMapsUrl}
    startDate={country.startDate}
    endDate={country.endDate}
    description={country.description}
    imageUrl={country.imageUrl}
    />;
  });
  
  return (
    <section className="journal--page">
      {/* <Journal />
      <Journal />
      <Journal /> */}
      {journey}
    </section>
  );
}

export default JournalPage;
