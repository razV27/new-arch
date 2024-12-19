import { NextResponse } from "next/server";

const mockedUsers = [
  { id: "1", name: "John Doe", email: "john.doe@example.com" },
  { id: "2", name: "Jane Smith", email: "jane.smith@example.com" },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("id");

  if (userId) {
    const user = mockedUsers.find((u) => u.id === userId);
    if (user) {
      return NextResponse.json(user);
    } else {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
  }

  return NextResponse.json(mockedUsers);
}
