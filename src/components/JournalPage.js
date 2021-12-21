import React from "react";
import Journal from "./Journal";
import "../App.css";

function JournalPage() {
  return (
    <section className="journal--page">
      <Journal />
      <Journal />
      <Journal />
    </section>
  );
}

export default JournalPage;
