import React from 'react';

export default function JournalEntry(props) {
  return (
    <div className="journal__entry pointer">
      <div className="journal__entry-picture">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="journal__entry-body">
        <div className="journal__entry-title">
          <strong>{props.title}</strong>
        </div>
        <div className="journal__entry-content">
          <p>{props.description}</p>
        </div>
      </div>
      <div className="journal__entry-date-box">
        <span>{props.day}</span>
        <h4>{props.date}</h4>
      </div>
    </div>
  );
}
