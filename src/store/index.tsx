import { configureStore, Store } from "@reduxjs/toolkit";
import theme from "./theme";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import authReducer from "./auth";
import settingReducer from "./setting";

const middlewares: any[] = [];

const rootReducer = combineReducers({
  theme,
  ...settingReducer,
  ...authReducer,
});

const persistConfig = {
  key: "root",
  keyPrefix: "",
  storage,
  whitelist: ["theme", "profile"],
};

export const store: Store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
