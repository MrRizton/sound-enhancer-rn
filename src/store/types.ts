import {DocumentPickerResponse} from 'react-native-document-picker';
import {Action, AnyAction} from 'redux';

export interface IEnhancerState {
  file?: DocumentPickerResponse;
}

export type State = {
  enhancer: IEnhancerState;
};

export type Actions = any;

export type Reducer<S, A extends Action = AnyAction> = (
  state: S,
  action: A,
) => S;
