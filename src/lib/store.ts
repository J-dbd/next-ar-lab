import { configureStore } from "@reduxjs/toolkit";
//exmaple
import { counterSlice } from "@/lib/features/counter/counterSlice";
import { designTokenSlice } from "@/lib/features/designToken/designTokenSlice";
/**
 * We can use to create a store instance per-request
 * @returns configStore
 */
export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      designTokenSlice: designTokenSlice.reducer,
    },
  });
};

// Infer the type of makeStore : makeStore의 타입을 추론해둔다
// for retaining the strong type safety
// 하나의 요청마다 store instance 를 생성할 수 있는데, 아래처럼 타입을 추론해두어서 타입 안정성을 보장할 수 있게 된다.
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// https://redux-toolkit.js.org/usage/nextjs
