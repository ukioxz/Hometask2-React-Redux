// src/store/actions.ts
import { Note } from './types';

// Action Types
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Action Creators
export interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: Note;
}

export interface DeleteNoteAction {
  type: typeof DELETE_NOTE;
  payload: string; // Note ID
}

export type NoteActionTypes = AddNoteAction | DeleteNoteAction;

export const addNote = (note: Note): NoteActionTypes => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (id: string): NoteActionTypes => ({
  type: DELETE_NOTE,
  payload: id,
});
