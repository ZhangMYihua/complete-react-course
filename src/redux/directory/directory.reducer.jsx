import { DIRECTORY_DATA } from './directory.data';

const INITIAL_STATE = {
  sections: DIRECTORY_DATA
};

export const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
