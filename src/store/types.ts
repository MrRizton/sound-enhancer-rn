import {Action, AnyAction} from 'redux';

export interface IEnhancerState {
  file?: string;
}

export type State = {
  enhancer: IEnhancerState;
};

export type Actions = any;

export type Reducer<S, A extends Action = AnyAction> = (
  state: S,
  action: A,
) => S;
