import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/Projects/projectSlice'
import projectDetailReducer from '../features/Projects/projectDetailSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectDetail: projectDetailReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch