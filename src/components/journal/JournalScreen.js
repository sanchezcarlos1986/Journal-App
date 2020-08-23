import React from 'react';
import {Sidebar, NothingSelected, NoteScreen} from '~components';

export default function JournalScreen() {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
    </div>
  );
}
