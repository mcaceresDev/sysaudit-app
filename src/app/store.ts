import { configureStore } from '@reduxjs/toolkit'
import projectsReducer from '../features/Projects/projectSlice'
import projectDetailReducer from '../features/Projects/projectDetailSlice'
import serviceDetailReducer from '../features/Services/serviceDetailSlice'

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    projectDetail: projectDetailReducer,
    serviceDetail: serviceDetailReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch