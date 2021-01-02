import {DocumentPickerResponse} from 'react-native-document-picker';
import {Action, AnyAction} from 'redux';
import { IHistoryItem } from '../types/history';

export interface IEnhancerState {
  file?: DocumentPickerResponse;
}

export interface IHistoryState {
  history: Array<IHistoryItem>;
}

export type State = {
  enhancer: IEnhancerState;
  history: IHistoryState;
};

export type Actions = any;

export type Reducer<S, A extends Action = AnyAction> = (
  state: S,
  action: A,
) => S;
