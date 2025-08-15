import { configureStore } from '@reduxjs/toolkit'
import { jobsApiSlice } from './features/jobs/jobsSlice'

export const store = configureStore({
  reducer: {
    // Add your reducers here
     jobsApiSlice: jobsApiSlice.reducer,
  },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(jobsApiSlice.middleware),
})