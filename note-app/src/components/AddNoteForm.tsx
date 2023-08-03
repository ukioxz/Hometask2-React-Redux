// AddNoteForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/actions";
import { v4 as uuidv4 } from "uuid";

const AddNoteForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = {
      id: uuidv4(),
      title,
      content,
    };
    dispatch(addNote(newNote));
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
