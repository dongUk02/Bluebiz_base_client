import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tabsReducer from '../reducers/MainTabSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';

const persistConfig = {
  key: "tabs",
  storage,
  whiteList: ["tabs"],
};

const rootReducer = combineReducers({
  tabs: tabsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

const persistor = persistStore(store); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };

