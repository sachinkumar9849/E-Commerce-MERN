import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProduct, fetchProductsByFilters } from "./productAPI";

const initialState = {
  products: [],
  status: "idle",
  totalItems:0
  
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
  async({filter,sort,pagination})=>{
    const response = await fetchProductsByFilters(filter,sort,pagination);
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
        state.products = action.payload.products;
        state.totalItems = action.payload.totalItems;
      });
  },
});


export const selectAllProducts = (state) => state.product.products;
export const selectTotalItems = (state)=>state.product.totalItems;

export default productSlice.reducer;
