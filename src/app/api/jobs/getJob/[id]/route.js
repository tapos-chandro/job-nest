import dbConnect, { client } from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export async function GET(req, {params}) {

    try {
        const { id } = await params;
        await dbConnect();
        const jobsCollection = client.db("job-nest").collection("jobs");
        const job = await jobsCollection.findOne({ _id: new ObjectId(id) });

        if (!job) {
            return new Response(
                JSON.stringify({ success: false, message: "Job not found" }),
                { status: 404, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ success: true, job }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );

    } catch (error) {
        console.error("Error fetching job:", error);
        return new Response("Error fetching job", { status: 500 });
    }

}