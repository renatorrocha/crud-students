import { type NextRequest, NextResponse } from "next/server";
import {
  type SchoolFormData,
  SchoolSchema,
} from "~/app/schools/_components/schema";
import { db } from "~/server/db";

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();
  const validation = SchoolSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const validatedBody: SchoolFormData = validation.data;

  const newSchool = await db.schools.create({
    data: { ...validatedBody },
  });

  return NextResponse.json(newSchool, { status: 200 });
}
