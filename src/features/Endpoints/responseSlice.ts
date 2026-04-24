import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { request } from "../../services/api/axiosClient"
import { fetchEndpointDetail } from "./endpointDetailSlice"

export const createResponse = createAsyncThunk(
  "responses/create",
  async (data: any, { dispatch }) => {
    const res = await request({
      method: "post",
      url: "/responses",
      data
    })

    dispatch(fetchEndpointDetail(data.endpoint_id))

    return res
  }
)

interface ResponseState {
  creating: boolean
}

const initialState: ResponseState = {
  creating: false
}

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createResponse.pending, (state) => {
        state.creating = true
      })
      .addCase(createResponse.fulfilled, (state) => {
        state.creating = false
      })
      .addCase(createResponse.rejected, (state) => {
        state.creating = false
      })
  }
})

export default responseSlice.reducer