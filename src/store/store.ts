import {AnyAction, combineReducers} from 'redux';
import {ClearStoreActionType} from './actions/actionTypes';
import enhancer, {initialEnhancerState} from './enhancer/store';
import history, { initialHistoryState } from './history/store';
import {State} from './types';

const initialState: State = {
  enhancer: initialEnhancerState,
  history: initialHistoryState,
};

const rootReducer = combineReducers({
  enhancer,
  history,
});

export default rootReducer;
