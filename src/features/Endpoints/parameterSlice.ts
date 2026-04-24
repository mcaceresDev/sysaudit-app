import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { request } from "../../services/api/axiosClient"
import { fetchEndpointDetail } from "./endpointDetailSlice"

export const createParameter = createAsyncThunk(
  "parameters/create",
  async (data: any, { dispatch }) => {
    const res = await request({
      method: "post",
      url: "/parameters",
      data
    })

    //REFETCH GLOBAL
    dispatch(fetchEndpointDetail(data.endpoint_id))

    return res
  }
)

interface ParameterState {
  creating: boolean
}

const initialState: ParameterState = {
  creating: false
}

const parameterSlice = createSlice({
  name: "parameter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createParameter.pending, (state) => {
        state.creating = true
      })
      .addCase(createParameter.fulfilled, (state) => {
        state.creating = false
      })
      .addCase(createParameter.rejected, (state) => {
        state.creating = false
      })
  }
})

export default parameterSlice.reducer