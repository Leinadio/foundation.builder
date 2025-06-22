import { userServiceInstance } from "@/lib/di-container";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  const body = await req.json();
  await userServiceInstance.createUser(body);
  return new NextResponse(null, { status: 201 });
}
