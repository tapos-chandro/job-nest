'use client'

import React from 'react'
import Link from 'next/link'
import { useDeleteJobMutation, useGetJobsQuery } from '@/app/redux/features/jobs/jobsSlice';
import SuccessModal from '@/app/components/SuccessModal';
import SkeletonLoader from '@/app/components/SkeletonLoader';


export default function EmployerJobsList() {

  const { data: jobs, isLoading, error, refetch } = useGetJobsQuery();
  const [deleteJob] = useDeleteJobMutation()


  if (isLoading) return <SkeletonLoader></SkeletonLoader>;
  if (error) return <p>Error loading jobs</p>;

  const handleDelete = async (id) => {
    try {
      const result = await deleteJob(id);
      if(result.data.success){
        console.log("Job deleted successfully:", result);

        <SuccessModal title="Job deleted successfully!" />

        refetch();
        
      }
    } catch (error) {
      console.error("Error deleting job:", error);
    }

  }



  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">My Jobs</h1>
        <Link
          href="/dashboard/jobs/new"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          + Post New Job
        </Link>
      </header>

      {jobs?.jobs?.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <ul className="space-y-4">
          {jobs?.jobs?.map((job) => (
            <li
              key={job.id}
              className="border rounded p-4 flex justify-between items-center hover:shadow-md transition"
            >
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.location}</p>
                <p
                  className={`mt-1 inline-block px-2 py-1 text-xs font-semibold rounded ${job.status === 'Open'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-200 text-gray-600'
                    }`}
                >
                  {job.status}
                </p>
              </div>
              <div className="space-x-3">
                <Link
                  href={`/jobs/${job.slug}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
                <Link
                  href={`/jobs/${job.slug}/edit`}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  // onClick={() => alert('Delete functionality coming soon!')}
                  className="text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
