import { configureStore } from '@reduxjs/toolkit'
import { jobsApiSlice } from './features/jobs/jobsSlice'


export const store = configureStore({
  reducer: {
    [jobsApiSlice.reducerPath]: jobsApiSlice.reducer, // RTK Query Reducer added
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApiSlice.middleware), // Middleware added
})