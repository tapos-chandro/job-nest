// ✅ Correct for RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobsApiSlice = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => '/jobs/getJobs',
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useGetJobsQuery, useDeleteJobMutation } = jobsApiSlice
