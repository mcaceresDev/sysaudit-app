import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../services/api/axiosClient";
import type { EndpointDetail } from "./endpoint.types";

export const fetchEndpointDetail = createAsyncThunk(
    "endpointDetail/fetch",
    async (id: number) => {
        return await request<EndpointDetail>({
            url: `/endpoints/${id}/details`
        })
    }
)

interface EndpointDetailState {
    data: EndpointDetail | null
    loading: boolean
    error: string | null
}

const initialState: EndpointDetailState = {
    data: null,
    loading: false,
    error: null
}

const endpointDetailSlice = createSlice({
    name: "endpointDetail",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchEndpointDetail.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchEndpointDetail.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchEndpointDetail.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message || "Error"
            })
    },
})

export default endpointDetailSlice.reducer