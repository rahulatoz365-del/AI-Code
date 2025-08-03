import { db } from "@/configs/db";
import { usersTable, WireframeToCodeTable } from "@/configs/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export const dynamic = 'force-dynamic';
export const maxDuration = 30; // 30s timeout for Render

export async function GET(request: Request) {
  try {
    // Security check
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json(
        { error: "Unauthorized" }, 
        { status: 401 }
      );
    }

    // Execute operations sequentially with error handling
    const resetUsers = await db.update(usersTable)
      .set({ credits: 20 })
      .execute();

    const deletedCodes = await db.delete(WireframeToCodeTable)
      .execute();

    return NextResponse.json(
      { 
        message: "Reset successful",
        stats: {
          usersReset: resetUsers.rowCount,
          codesDeleted: deletedCodes.rowCount
        }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Reset failed:", error);
    
    // Enhanced error response with proper error typing
    let errorMessage = "Operation failed";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json(
      { 
        error: "Operation failed",
        message: errorMessage
      },
      { status: 500 }
    );
  }
}