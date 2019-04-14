import { createSelector } from 'reselect';

const getRouter = state => state.router;

export const getLocationPathname = createSelector(
  getRouter,
  router => router.location.pathname
);
