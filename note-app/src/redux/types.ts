// types.ts
export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface AppState {
  notes: Note[];
}

export enum ActionTypes {
  ADD_NOTE = "ADD_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
}
