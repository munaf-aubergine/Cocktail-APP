import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "./store";
import { RootState } from "./store";
// Use throughout your app instead of plain `useDispatch` and `useSelector`
//create a custom hook for dispatch because async thunks actions need this , otherwise will give type error
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
