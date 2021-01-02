import {IEnhancerState, Reducer} from '../types';
import {IRemoveFileAction, ISetFileAction} from './actions/types';
import {initialEnhancerState} from './store';

export const setFileMiddleware: Reducer<IEnhancerState, ISetFileAction> = (
  state,
  action,
) => {
  const {file} = action;
  return {...state, file};
};

export const removeMiddleware: Reducer<IEnhancerState, IRemoveFileAction> = (
  state,
  action,
) => {
  return {...initialEnhancerState};
};
