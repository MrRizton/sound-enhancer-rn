import {UpdateHistoryActionType} from './actionTypes';
import {Action} from 'redux';
import { DocumentPickerResponse } from 'react-native-document-picker';
import { IHistoryItem } from '../../../types/history';

export interface IUpdateHistoryAction extends Action<typeof UpdateHistoryActionType> {
  file: IHistoryItem;
}

type HistoryAction = IUpdateHistoryAction;

export default HistoryAction;
