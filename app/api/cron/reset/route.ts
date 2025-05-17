import { db } from "@/configs/db";
import { usersTable, WireframeToCodeTable } from "@/configs/schema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Security check
    if (process.env.CRON_SECRET !== "YOUR_SECRET_TOKEN") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 1. Reset all user credits to 20
    await db.update(usersTable)
      .set({ credits: 20 })
      .execute();

    // 2. Delete all code records
    await db.delete(WireframeToCodeTable)
      .execute();

    // 3. Return success response
    return NextResponse.json(
      { message: "Reset successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Reset failed:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}