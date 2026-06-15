import { NextResponse } from "next/server";
import { client } from "@/lib/discord";
import { createRoles } from "@/lib/createRoles";

let started = false;

export async function GET() {

  if (!started) {

    await client.login(
      process.env.DISCORD_TOKEN
    );

    started = true;
  }

  await createRoles();

  return NextResponse.json({
    success: true
  });
}