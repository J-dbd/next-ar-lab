import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import designTokenReducer from "./features/designToken/designTokenSlice";
import counterReducer from "./features/counter/counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// persist 설정
const counterPersistConfig = {
  key: "counter",
  storage,
  whitelist: ["value"], // 저장할 state 속성들
};

const persistedCounterReducer = persistReducer(
  counterPersistConfig,
  counterReducer
);

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      designToken: designTokenReducer,
      //counter: counterReducer,
      counter: persistedCounterReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // redux-persist를 사용할 때는 직렬화 검사를 비활성화해야 합니다.
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
