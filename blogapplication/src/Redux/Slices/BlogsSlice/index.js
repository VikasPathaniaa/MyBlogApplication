import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../Service/api";

export const getBlogs = createAsyncThunk(
  "blogsSlice/getBlogs",
  async ({ category, page }, { rejectWithValue }) => {
    try {
      let response = await API.getAllBlogs({ category, page });
      if (response.isSuccess) {
        return response.data;
      }
    } catch (error) {
      console.log("catch error", error);
      throw rejectWithValue(error.response?.data);
    }
  }
);

const blogsSlice = createSlice({
  name: "blogsSlice",
  initialState: {
    data: [],
    isLoading: false,
    totalPages:null,
    isError: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action.payload, "payload ");
        state.data = action.payload?.blogs;
        state.totalPages = action.payload?.totalPages;
      })
      .addCase(getBlogs.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export default blogsSlice.reducer;
