import dbConnect, { client } from "@/lib/mongodb";

export async function GET(res) {

  try {
    await dbConnect();

    const jobsCollection = client.db("job-nest").collection("jobs");

    const result = await jobsCollection.find();

    const jobs = await result.toArray();

    
    return new Response(
      JSON.stringify({ success: true, jobs }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error:", error);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
