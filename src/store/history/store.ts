import { Reducer } from 'redux';
import { IHistoryState } from '../types';
import { UpdateHistoryActionType } from './actions/actionTypes';
import HistoryAction from './actions/types';
import { UpdateHistoryMiddleware } from './middleware';

export const initialHistoryState: IHistoryState = {
  history: [],
};

const history: Reducer<IHistoryState, HistoryAction> = (
  state = initialHistoryState,
  action,
) => {
  switch (action.type) {
    case UpdateHistoryActionType:
      return UpdateHistoryMiddleware(state, action);
    default:
      return state;
  }
};

export default history;
