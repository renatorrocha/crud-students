import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import {
  type SchoolFormData,
  SchoolSchema,
} from "~/app/schools/_components/schema";
import { db } from "~/server/db";

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  const body: unknown = await req.json();
  const validation = SchoolSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const validatedBody: SchoolFormData = validation.data;

  const school = await db.schools.findUnique({
    where: { id: params.id },
  });

  if (!school) {
    return NextResponse.json({ error: "School Not Found." }, { status: 404 });
  }

  const updatedSchool = await db.schools.update({
    where: { id: school.id },
    data: {
      ...validatedBody,
    },
  });

  revalidatePath("/schools");

  return NextResponse.json(updatedSchool, { status: 200 });
}

// export async function DELETE({ params }: { params: { id: string } }) {
//   const school = await db.schools.findUnique({
//     where: { id: params.id },
//   });

//   if (!school) {
//     return NextResponse.json({ error: "School Not Found." }, { status: 404 });
//   }

//   await db.schools.delete({
//     where: { id: school.id },
//   });

//   return NextResponse.json(
//     { message: "School deleted successfully." },
//     { status: 200 },
//   );
// }
