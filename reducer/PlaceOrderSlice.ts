import Order from "../model/PlaceOrder";
import axios from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {append} from "react-native-svg/lib/typescript/lib/Matrix2D";

const initiateState:Order[]=[];

const api=axios.create({
    baseURL:'http://localhost:3005/order',
    })

export const saveOrder=createAsyncThunk(
    "order/add",
    async (order:Order,{rejectWithValue})=>{
        try {
            const response=await api.post("/add",order);
            return response.data;
        }catch (error:any){
            return rejectWithValue(error.response?.data||error.message);
        }
    }
);

const OrderSlice=createSlice({
    name:'order',
    initialState:initiateState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
            .addCase(saveOrder.fulfilled,(state,action)=>{
                state.push(action.payload);
            })
    }
})

export const {}=OrderSlice.actions;
export default OrderSlice.reducer;