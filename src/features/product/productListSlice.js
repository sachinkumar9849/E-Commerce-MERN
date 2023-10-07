import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct, fetchProductsByFilters } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAllProductAsync = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await fetchProduct();

    return response.data;
  }
);

export const fetchProductsByFiltersAsync = createAsyncThunk(
  "product/fetchProductsByFilters",
  async(filter)=>{
    const response = await fetchProductsByFilters(filter);
    return response.data;
  }
)


export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchProductsByFiltersAsync.pending, (state) => { // Corrected the action type here
        state.status = "loading";
      })
      .addCase(fetchProductsByFiltersAsync.fulfilled, (state, action) => { // Corrected the action type here
        state.status = "idle";
        state.products = action.payload;
      });
  },
});


export const selectAllProducts = (state) => state.product.products;

export default productSlice.reducer;