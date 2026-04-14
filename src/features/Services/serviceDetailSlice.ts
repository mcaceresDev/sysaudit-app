import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { ServiceDetail } from "./service.types"
import { fetchServiceDetailRequest } from "./serviceApi"

interface ServiceDetailState {
    data: ServiceDetail | null
    loading: boolean
    error: string | null
}

const initialState: ServiceDetailState = {
    data: null,
    loading: false,
    error: null
}

// GET DETAILS
export const fetchServiceDetails = createAsyncThunk(
    "serviceDetail/fetch",
    async (id: number) => {
        return await fetchServiceDetailRequest(id)
    }
)

const serviceDetailSlice = createSlice({
    name: "ServiceDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchServiceDetails.pending , (state) => {
                state.loading = true
            })
            .addCase(fetchServiceDetails.fulfilled , (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchServiceDetails.rejected , (state, action) => {
                state.loading = false
                state.error = action.error.message || "Error"
            })
    }
})

export default serviceDetailSlice.reducer