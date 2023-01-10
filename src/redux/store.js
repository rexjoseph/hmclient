import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {cartReducer} from "./cartRedux"
import userReducer from "./userRedux"
import emailReducer from "./emailRedux"
import productReducer from "./productRedux"
import orderReducer from "./orderRedux"
import categoryReducer from "./categoryRedux"
import userGeneratedContentReducer from "./ugcRedux"
import bannerReducer from "./bannerRedux"
import discountReducer from "./discountRedux"

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
import announcementReducer from "./announcementReducer"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  carts: cartReducer,
  user: userReducer,
  product: productReducer,
  order: orderReducer,
  category: categoryReducer,
  emailMarketing: emailReducer,
  uGCContent: userGeneratedContentReducer,
  banner: bannerReducer,
  announcement: announcementReducer,
  discount: discountReducer
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