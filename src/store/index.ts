import AsyncStorage from '@react-native-community/async-storage';
import {applyMiddleware, createStore} from 'redux';
import {
  createMigrate,
  MigrationManifest,
  PersistConfig,
  persistReducer,
  persistStore,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
import rootReducer from './store';
import {State} from './types';

// AsyncStorage.clear()

const persistConfig: PersistConfig<State> = {
  key: 'root',
  version: 0,
  storage: AsyncStorage,
  whitelist: ['enhancer', 'history'],
  debug: true,
};

export const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;
