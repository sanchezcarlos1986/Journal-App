import React from 'react';
import {NotesAppBar} from '~components';

export default function NoteScreen() {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          type="text"
          placeholder="What happened today?"
          className="notes__textarea"
        ></textarea>

        <figure className="notes__image">
          <img
            src="https://i.pinimg.com/564x/08/80/99/08809940d40530bfdb457d7a60466657.jpg"
            alt="image_note"
          />
        </figure>
      </div>
    </div>
  );
}
