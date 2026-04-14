import type { RootState } from "../../app/store"

export const selectProjectDetail = (state: RootState) =>
  state.projectDetail.data

export const selectProjectDetailLoading = (state: RootState) =>
  state.projectDetail.loading