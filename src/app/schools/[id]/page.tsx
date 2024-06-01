import { db } from "~/server/db";

export default async function ViewSchoolDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const school = await db.schools.findUnique({
    where: { id: params.id },
  });

  if (!school) {
    return <p className="text-destructive">School Not Found!</p>;
  }

  return (
    <div>
      {school.name}
      {school.email}
      {school.status}
    </div>
  );
}
