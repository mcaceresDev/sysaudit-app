import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { request } from "../../services/api/axiosClient"
import type { ProjectDetail } from "./project.types"

export const fetchProjectDetail = createAsyncThunk(
  "projectDetail/fetch",
  async (id: number) => {
    return await request<ProjectDetail>({
      url: `/projects/details/${id}`
    })
  }
)

interface ProjectDetailState {
  data: ProjectDetail | null
  loading: boolean
  error: string | null
}

const initialState: ProjectDetailState = {
  data: null,
  loading: false,
  error: null
}

const projectDetailSlice = createSlice({
  name: "projectDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectDetail.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProjectDetail.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchProjectDetail.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Error"
      })
  }
})

export default projectDetailSlice.reducer