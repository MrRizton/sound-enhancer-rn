import {RemoveFileActionType, SetFileActionType} from './actions/actionTypes';
import EnhancerAction from './actions/types';
import {setFileMiddleware, removeMiddleware} from './middleware';
import {Reducer} from 'redux';
import {IEnhancerState} from '../types';

export const initialEnhancerState: IEnhancerState = {};

const enhancer: Reducer<IEnhancerState, EnhancerAction> = (
  state = initialEnhancerState,
  action,
) => {
  switch (action.type) {
    case SetFileActionType:
      return setFileMiddleware(state, action);
    case RemoveFileActionType:
      return removeMiddleware(state, action);
    default:
      return state;
  }
};

export default enhancer;
