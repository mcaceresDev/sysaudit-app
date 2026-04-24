import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { request } from "../../services/api/axiosClient"
import { fetchEndpointDetail } from "./endpointDetailSlice"

export const updateEndpoint = createAsyncThunk(
  "endpoint/update",
  async ({ id, data }: any, { dispatch }) => {
    const res = await request({
      method: "put",
      url: `/endpoints/${id}`,
      data
    })

    dispatch(fetchEndpointDetail(id))

    return res
  }
)

interface endpointState {
  saving: boolean
}

const initialState: endpointState = {
  saving: false
}

const endpointSlice = createSlice({
  name: "endpoint",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateEndpoint.pending, (state) => {
        state.saving = true
      })
      .addCase(updateEndpoint.fulfilled, (state) => {
        state.saving = false
      })
      .addCase(updateEndpoint.rejected, (state) => {
        state.saving = false
      })
  }
})

export default endpointSlice.reducer