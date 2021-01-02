import {IHistoryState, Reducer} from '../types';
import {IUpdateHistoryAction} from './actions/types';
import _ from 'lodash';

export const UpdateHistoryMiddleware: Reducer<
  IHistoryState,
  IUpdateHistoryAction
> = (state, action) => {
  const {file} = action;
  const newState = state.history.find(
    (item) =>
      item.file.uri === file.file.uri && _(item.options).isEqual(file.options),
  )
    ? state
    : {...state, history: [file, ...state.history]};
  return newState;
};
