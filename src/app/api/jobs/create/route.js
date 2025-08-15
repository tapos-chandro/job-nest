import dbConnect, { client } from "@/lib/mongodb";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();

    const jobsCollection = client.db("job-nest").collection("jobs");

    const result = await jobsCollection.insertOne(body);

    return new Response(
      JSON.stringify({ success: true, insertedId: result.insertedId }),
      {
        status: 201,
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
