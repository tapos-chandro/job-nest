import React from 'react'
import Link from 'next/link'

const jobs = [
  {
    id: 'job1',
    title: 'Frontend Developer',
    location: 'Remote',
    status: 'Open',
    slug: 'frontend-developer',
  },
  {
    id: 'job2',
    title: 'Backend Engineer',
    location: 'New York, NY',
    status: 'Closed',
    slug: 'backend-engineer',
  },
  {
    id: 'job3',
    title: 'Product Manager',
    location: 'San Francisco, CA',
    status: 'Open',
    slug: 'product-manager',
  },
]

export default function EmployerJobsList() {
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

      {jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <ul className="space-y-4">
          {jobs.map((job) => (
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
