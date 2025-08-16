import dbConnect, { client } from "@/lib/mongodb";
import { ObjectId } from "mongodb";




export async function DELETE(req, { params }) {
    try {
        const { id } = params;
        console.log("Deleting job with params id:", id);
        await dbConnect();
        const jobsCollection = client.db("job-nest").collection("jobs");
        const result = await jobsCollection.deleteOne({ _id: new ObjectId(id) });

        console.log("Job deleted:", result);
        if (result.deletedCount === 0) {
            return new Response(
                JSON.stringify({ success: false, message: "Job not found" }),
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }


        return new Response(
            JSON.stringify({ success: true, message: "Job deleted successfully" }),
            { status: 200 }
        );


    } catch (error) {
        console.error("Error deleting job:", error);
        throw new Error("Failed to delete job");
    }
}