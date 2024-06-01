import dynamic from "next/dynamic";
import BackButton from "~/components/back-button";
import { db } from "~/server/db";

const SchoolForm = dynamic(() => import("../../_components/form"), {
  ssr: false,
});

export default async function EditSchoolPage({
  params,
}: {
  params: { id: string };
}) {
  const school = await db.schools.findUnique({
    where: { id: params.id },
  });

  if (!school) {
    return <p className="text-destructive">School Not Found</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      <BackButton href={`/schools/${school.id}`} />

      <SchoolForm school={school} />
    </div>
  );
}
