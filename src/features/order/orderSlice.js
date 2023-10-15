import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, fetchCount } from "./orderAPI";

const initialState = {
  value: 0,
  status: "idle",
  orders:[],
};

export const createOrderAsync = createAsyncThunk(
  "counter/createOrder",
  async (order) => {
    const response = await createOrder(order);

    return response.data;
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
      });
  },
});



export const selectCount = (state) => state.counter.value;

export default orderSlice.reducer;
