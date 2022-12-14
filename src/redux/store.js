import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {cartReducer} from "./cartRedux"
import userReducer from "./userRedux"
import emailReducer from "./emailRedux"
import productReducer from "./productRedux"
import categoryReducer from "./categoryRedux"
import userGeneratedContentReducer from "./ugcRedux"
import bannerReducer from "./bannerRedux"

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  carts: cartReducer,
  user: userReducer,
  product: productReducer,
  category: categoryReducer,
  emailMarketing: emailReducer,
  uGCContent: userGeneratedContentReducer,
  banner: bannerReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store);