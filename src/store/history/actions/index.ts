import {ActionCreator} from 'redux';
import {IHistoryItem} from '../../../types/history';
import {UpdateHistoryActionType} from './actionTypes';
import {IUpdateHistoryAction} from './types';

export const updateHistoryAction: ActionCreator<IUpdateHistoryAction> = (
  file: IHistoryItem,
) => ({
  type: UpdateHistoryActionType,
  file,
});
