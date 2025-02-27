import {combineReducers, configureStore} from "@reduxjs/toolkit";
import placeOrderSlice from "../reducer/PlaceOrderSlice";
import UserSlice from "../reducer/UserSlice";
import SignUpSlice from "../reducer/SignUpSlice";


 const rootReducer = combineReducers({
//     // customers: CustomerSlice,
//     // items: ItemSlice,
//
     users : UserSlice,
     signUp:SignUpSlice,
})



export const store = configureStore({
    reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch;
// --------------------------------
