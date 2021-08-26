import { ADDUSER } from "./actions";

export const initialState = { users: [] };

export const reducer = (state = initialState, action) => {
  if (action.type === ADDUSER) {
    return { users: [...state.users, action.payload] };
  }
  return state;
};
