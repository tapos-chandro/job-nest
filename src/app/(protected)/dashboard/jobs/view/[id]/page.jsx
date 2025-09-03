'use client';

import { useGetJobQuery } from "@/app/redux/features/jobs/jobsSlice";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import SkeletonLoader from "@/app/components/SkeletonLoader";

export default function JobDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: job, isLoading, error } = useGetJobQuery(id);

  if (isLoading) return <SkeletonLoader />;
  if (error) return <p className="text-red-600">Error loading job details</p>;

  const jobData = job?.job;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Job Details</h1>
        <button
          className="px-4 py-2 text-black bg-gray-300 hover:bg-gray-400 rounded"
          onClick={() => router.back()}
        >
          Back
        </button>
      </header>

      <div className="border rounded p-6 shadow-sm space-y-4">
        <h2 className="text-2xl font-bold break-words">{jobData?.title}</h2>
        <p><span className="font-semibold">Location:</span> {jobData?.location}</p>
        <p><span className="font-semibold">Status:</span> 
          <span className={`ml-2 px-2 py-1 rounded text-white ${jobData?.status === 'Open' ? 'bg-green-500' : 'bg-gray-500'}`}>
            {jobData?.status}
          </span>
        </p>
        <p><span className="font-semibold">Description:</span></p>
        <p className="ml-2 break-words">{jobData?.description || 'No description provided.'}</p>
        <p><span className="font-semibold">Salary:</span> {jobData?.salary || 'Negotiable'}</p>
        <p><span className="font-semibold">Requirements:</span> {jobData?.requirements || 'Not specified'}</p>
        <p><span className="font-semibold">Posted At:</span> {new Date(jobData?.createdAt).toLocaleDateString()}</p>
      </div>

      <div className="mt-6 flex space-x-3">
        <Link
          href={`/dashboard/jobs/edit/${jobData?._id}`}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Edit Job
        </Link>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
          onClick={() => router.push('/dashboard/jobs')}
        >
          Back to Jobs
        </button>
      </div>
    </div>
  );
}
