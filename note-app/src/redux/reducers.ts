// src/store/reducers.ts
import { ADD_NOTE, DELETE_NOTE, NoteActionTypes } from './actions';
import { Note } from './types';

export interface AppState {
  notes: Note[];
}

const initialState: AppState = {
  notes: [],
};

const rootReducer = (state = initialState, action: NoteActionTypes): AppState => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
