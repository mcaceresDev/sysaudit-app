import type { RootState } from "../../app/store"

export const selectServiceDetail = (state: RootState) =>
  state.serviceDetail.data

export const selectServiceDetailLoading = (state: RootState) =>
  state.serviceDetail.loading