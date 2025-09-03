'use client';
import React from 'react';
import Link from 'next/link';
import { useDeleteJobMutation, useGetJobsQuery } from '@/app/redux/features/jobs/jobsSlice';
import SkeletonLoader from '@/app/components/SkeletonLoader';
import Swal from 'sweetalert2';



export default function EmployerJobsList() {

  const { data: jobs, isLoading, error, refetch } = useGetJobsQuery();
  const [deleteJob] = useDeleteJobMutation()

  if (isLoading) return <SkeletonLoader></SkeletonLoader>;
  if (error) return <p>Error loading jobs</p>;


  const handleDelete = async (id) => {
    try {
      const result = await deleteJob(id);
      if (result.data.success) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Job deleted successfully!",
          showConfirmButton: false,
          timer: 1500
        });
      }
      refetch();
    } catch (error) {
      console.error("Error deleting job:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Failed to delete job!',
      })
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

      {jobs?.jobs?.length === 0 ?
        <p>No jobs posted yet.</p>
        :
        <div>
          {jobs?.jobs?.map((job) =>
            <div
              key={job.id}
              className="border rounded p-4 grid grid-cols-4 gap-4 justify-between items-center hover:shadow-md"
            >
              <div className='lg:col-span-3 md:col-span-3 col-span-4'>
                <h2 className="text-xl font-semibold w-full break-words">{job.title}</h2>
                <p className="text-gray-600 break-words">{job.location}</p>
                <p
                  className={`mt-1 inline-block px-2 py-1 text-xs font-semibold rounded ${job.status?.toLowerCase() === 'open'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-200 text-gray-600'
                    }`}
                >
                  {job.status} Pending
                </p>
              </div>
              <div className="flex gap-4  items-center justify-end  lg:col-span-1 md:col-end-1 col-end-4">
                <Link
                  href={`/dashboard/jobs/view/${job._id}`}
                  className="text-blue-600 hover:underline"
                >
                  View
                </Link>
                <Link
                  href={`/dashboard/jobs/edit/${job._id}`}
                  className="text-yellow-600 hover:underline"
                >
                  Edit
                </Link>
                <button
                  className="text-red-600 hover:underline cursor-pointer"
                  type="button"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

      }
    </div>
  )
}
