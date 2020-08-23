import React from 'react';
import {JournalEntry} from '~components';

export default function JournalEntries() {
  const entry = {
    title: 'Hola',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia',
    img:
      'https://i.pinimg.com/564x/08/80/99/08809940d40530bfdb457d7a60466657.jpg',
    date: '28',
    day: 'Monday',
  };
  const entries = new Array(5).fill(entry);
  return (
    <div className="journal__entries">
      {entries.map((entry, i) => (
        <JournalEntry key={i} {...entry} />
      ))}
    </div>
  );
}
