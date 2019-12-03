import { createSelector } from 'reselect';

export const setting = state => state.setting;
export const settingSelector = createSelector(
  setting,
  data => data.data,
);
