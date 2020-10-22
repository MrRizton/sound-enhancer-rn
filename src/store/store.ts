import {AnyAction, combineReducers} from 'redux';
import {ClearStoreActionType} from './actions/actionTypes';
import enhancer, {initialEnhancerState} from './enhancer/store';
import {State} from './types';

const initialState: State = {
  enhancer: initialEnhancerState,
};

const rootReducer = combineReducers({
  enhancer,
});

export default rootReducer;
