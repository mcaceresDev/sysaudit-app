import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { request } from "../../services/api/axiosClient"
import { fetchEndpointDetail } from "./endpointDetailSlice"

export const upsertAuth = createAsyncThunk(
  "auth/upsert",
  async ({ endpointId, data }: any, { dispatch }) => {
    const res = await request({
      method: "put",
      url: `/endpoint-auth/${endpointId}`,
      data
    })

    dispatch(fetchEndpointDetail(endpointId))

    return res
  }
)

interface AuthState {
  saving: boolean
}

const initialState: AuthState = {
  saving: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(upsertAuth.pending, (state) => {
        state.saving = true
      })
      .addCase(upsertAuth.fulfilled, (state) => {
        state.saving = false
      })
      .addCase(upsertAuth.rejected, (state) => {
        state.saving = false
      })
  }
})

export default authSlice.reducer