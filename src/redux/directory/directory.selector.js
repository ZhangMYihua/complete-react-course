import { createSelector } from 'reselect';

export const getDirectory = state => state.directory;

export const getSections = createSelector(
  getDirectory,
  directory => directory.sections
);
