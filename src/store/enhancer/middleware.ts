import {IEnhancerState, Reducer} from '../types';
import {ISetFileAction} from './actions/types';

export const SetFileMiddleware: Reducer<IEnhancerState, ISetFileAction> = (
  state,
  action,
) => {
  const {file} = action;
  return {...state, file};
};
