// bodySlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { request } from "../../services/api/axiosClient"
import { fetchEndpointDetail } from "./endpointDetailSlice"

export const upsertBody = createAsyncThunk(
  "body/upsert",
  async ({ endpointId, data }: any, { dispatch }) => {
    const res = await request({
      method: "put",
      url: `/endpoint-bodies/${endpointId}/upsert`,
      data
    })

    dispatch(fetchEndpointDetail(endpointId))
    return res
  }
)

const slice = createSlice({
  name: "body",
  initialState: { saving: false },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(upsertBody.pending, s => { s.saving = true })
      .addCase(upsertBody.fulfilled, s => { s.saving = false })
      .addCase(upsertBody.rejected, s => { s.saving = false })
  }
})

export default slice.reducer