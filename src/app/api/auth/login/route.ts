import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();

  const email = body.email;
  const password = body.password;

  if (email !== "admin@test.com" || password !== "123456") {
    return Response.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const cookieStore = await cookies();

  cookieStore.set("auth-token", "logged-in", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return Response.json({ message: "Logged in successfully" });
}