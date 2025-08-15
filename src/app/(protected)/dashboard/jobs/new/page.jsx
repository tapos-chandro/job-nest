'use client'
import React from 'react'

export default function CreateJob() {

    const handleCreateJob = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jobData = Object.fromEntries(formData);
        console.log(jobData);

        const response = await fetch('/api/jobs/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        });

        const data = await response.json();
        console.log(data);

        console.log(response);
        // if (response.ok) {
        //     console.log("Job created successfully");
        // } else {
        //     console.error("Error creating job");
        // }
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Create a New Job</h1>
            <form onSubmit={handleCreateJob} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Job Title"

                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="text"
                    name="company"
                    placeholder="Company Name"

                    className="border p-2 w-full rounded"
                    required
                />

                <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="border p-2 w-full rounded"
                    required
                />

                <textarea
                    name="description"
                    placeholder="Job Description"
                    className="border p-2 w-full rounded min-h-[120px]"
                    required
                ></textarea>

                <input
                    type="text"
                    name="salary"
                    placeholder="Salary (optional)"
                    className="border p-2 w-full rounded"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Post Job
                </button>
            </form>
        </div>
    )
}
