'use client'

import SkeletonLoader from "@/app/components/SkeletonLoader";
import { useGetJobQuery, useUpdateJobMutation } from "@/app/redux/features/jobs/jobsSlice";
import { useParams, useRouter } from "next/navigation";


import Swal from 'sweetalert2'


export default function EditJobPage() {

    const [updateJob] = useUpdateJobMutation();

    const router = useRouter();

    const { id } = useParams();

    const { data: job, isLoading, error, refetch } = useGetJobQuery(id);
    if (isLoading) {
        return <SkeletonLoader></SkeletonLoader>
    }

    const handleEditJob = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jobData = Object.fromEntries(formData);
        console.log(jobData);



        const result = await updateJob({ id, jobData });
        console.log(result, 'update results');
        if (result.data.modifiedCount > 0) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Job updated Successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            refetch();
            router.push('/dashboard/jobs')
        }
    }


    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Create a New Job</h1>
            <form onSubmit={handleEditJob} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"
                    defaultValue={job?.job?.title || ''}
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    defaultValue={job?.job?.company || ''}
                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="border p-2 w-full rounded"
                    defaultValue={job?.job?.location || ''}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Job Description"
                    className="border p-2 w-full rounded min-h-[120px]"
                    defaultValue={job?.job?.description || ''}
                    required
                ></textarea>

                <input
                    type="text"
                    name="salary"
                    placeholder="Salary (optional)"
                    className="border p-2 w-full rounded"
                    defaultValue={job?.job?.salary || ''}
                />

                <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 hover:cursor-pointer rounded hover:bg-green-700"
                >
                    Update Job
                </button>
            </form>
        </div>
    )
}
