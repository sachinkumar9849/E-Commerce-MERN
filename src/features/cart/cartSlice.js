import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteItemFormCart, fetchCount, fetchItemsByUserId, updateCart } from "./cartAPI";

const initialState = {
  status: "idle",
  items: [],
};

export const addToCartAsync = createAsyncThunk(
  "cart/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);
export const fetchItemsByUserIdAsync = createAsyncThunk(
  "cart/fetchItemsByUserId",
  async (userId) => {
    const response = await fetchItemsByUserId(userId);
    return response.data;
  }
);
export const updateCartAsync = createAsyncThunk(
  "cart/updateCart",
  async (update) => {
    const response = await updateCart(update);
    return response.data;
  }
);
export const deleteItemFormCartAsync = createAsyncThunk(
  "cart/deleteItemFormCart",
  async (itemId) => {
    const response = await deleteItemFormCart(itemId);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchItemsByUserIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItemsByUserIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items=action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(item=>item.id===action.payload.id);
        state.items[index]= action.payload;
      })
      .addCase(deleteItemFormCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteItemFormCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(item=>item.id===action.payload.id);
        state.items.splice(index,1);
      })
  },
});

// export const selectCount = (state) => state.counter.value;
export const selectItems = (state) => state.cart.items;
export default cartSlice.reducer;
