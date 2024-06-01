import dynamic from "next/dynamic";
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

  return <SchoolForm school={school} />;
}
