// src/NoteList.tsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../redux/reducers';
import { addNote, deleteNote } from '../redux/actions';
import { Note } from '../redux/types';
import { v4 as uuidv4 } from "uuid";

const NoteList: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const notes = useSelector((state: AppState) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (title && content) {
      const newNote: Note = {
        id: uuidv4(),
        title,
        content,
      };
      dispatch(addNote(newNote));
      setTitle('');
      setContent('');
    }
  };

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <div>
      <h1>My Notes</h1>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
