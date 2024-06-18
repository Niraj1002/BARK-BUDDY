export async function GET(req) {
  const { id } = req.params;
  const data = await getData(id);
  return NextResponse.json(data);
}
