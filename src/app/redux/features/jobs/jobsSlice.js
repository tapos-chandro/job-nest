// ✅ Correct for RTK Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const jobsApiSlice = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: () => '/jobs/getJobs',
    }),
    getJob: builder.query({
      query: (id) => `/jobs/getJob/${id}`,
    }),
    deleteJob: builder.mutation({
      query: (id) => ({
        url: `/jobs/delete/${id}`,
        method: "DELETE",
      }),
    }),
    updateJob: builder.mutation({
      query: ({id, jobData}) => ({
        url: `/jobs/update/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
      }),
    })
  }),
})

export const { useGetJobsQuery, useDeleteJobMutation , useGetJobQuery , useUpdateJobMutation } = jobsApiSlice
