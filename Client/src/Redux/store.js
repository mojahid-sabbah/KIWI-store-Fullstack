import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from "./cartRedux.js";
import userReducer from "./userRedux.js";

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const rootReducer = combineReducers({user:userReducer , cart : cartReducer})

const persistedUserReducer = persistReducer(persistConfig, rootReducer);
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE','REGISTER',   ],
    },
  });

export const store = configureStore({
  reducer: persistedUserReducer ,
  middleware,
});

export const persistor = persistStore(store);
