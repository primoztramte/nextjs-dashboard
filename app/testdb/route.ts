import postgres from "postgres";

async function getData() {
  const sql = postgres(process.env.DATABASE_URL!);
  const response = await sql`SELECT version()`;
  return response[0].version;
}

export async function GET() {
  try {
    console.log(process.env.DATABASE_URL);
    const data = await getData();

    return Response.json({ message: "Success" });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
