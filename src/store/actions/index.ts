import { ActionCreator } from 'redux';
import { LogoutActionType, onErrorActionType, ClearStoreActionType } from './actionTypes';
import { LogoutAction, IOnErrorAction, ClearStoreAction } from './types';

export const logoutAction: ActionCreator<LogoutAction> = () => ({
  type: LogoutActionType,
});

export const clearStoreAction: ActionCreator<ClearStoreAction> = () => ({
  type: ClearStoreActionType,
});

export const onErrorAction: ActionCreator<IOnErrorAction> = (error: Error) => ({
  type: onErrorActionType,
  error,
});
