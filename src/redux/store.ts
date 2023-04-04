import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cocktailReducer from "./features/cocktailSlice";

export const store = configureStore({
  reducer: { cocktail: cocktailReducer },
});

//This configurations are mainly for typed things

//This will be use to configure useAppDispatch which will be used instead of useDispatch
export type AppDispatch = typeof store.dispatch;
//This root will be used when we do useSelector it works as type and gives us state defined in slice
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
