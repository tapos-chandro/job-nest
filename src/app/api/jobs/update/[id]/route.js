import dbConnect, { client } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function PUT(req, { params }) {


    try {
        await dbConnect();

        const  {id}   = await params;

        const jobData = await req.json();

        const jobsCollections = client.db("job-nest").collection("jobs");

        const filter = { _id: new ObjectId(id) };
        const updateDoc = { $set:jobData };

        const updatedJob = await jobsCollections.updateOne(filter, updateDoc);
        if (updatedJob.modifiedCount === 0) {
            return new Response(JSON.stringify({ message: "Job not found" }), { status: 404 });
        }

        return new Response(JSON.stringify(updatedJob), { status: 200 });

    } catch (error) {
        console.error("Error updating job:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }

}