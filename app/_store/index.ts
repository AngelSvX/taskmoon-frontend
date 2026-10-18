import adminReducer from "@/features/admin/admin/model/slice";
import loginReducer from "@/features/auth/login/model/slice";
import registerReducer from "@/features/auth/register/model/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  admin: adminReducer
});

export const makeStore = () => configureStore({ reducer: rootReducer });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];