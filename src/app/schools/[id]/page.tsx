import Link from "next/link";
import BackButton from "~/components/back-button";
import StatusBadge from "~/components/status-badge";
import { buttonVariants } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
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
    <div className="flex flex-col gap-4">
      <BackButton href={`/schools`} />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <Card className="mx-4 flex-1 lg:col-span-3 lg:mr-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <CardTitle>{school.name}</CardTitle>

                <CardDescription>{school.email}</CardDescription>
              </div>

              <StatusBadge status={school.status} />
            </div>
          </CardHeader>
        </Card>

        <aside className="mx-4 flex flex-col gap-2 lg:mx-0">
          <Link
            href={`/schools/edit/${school.id}`}
            className={`${buttonVariants({ variant: "secondary" })}`}
          >
            Edit School
          </Link>

          <Link
            href={`/schools/edit/${school.id}`}
            className={`${buttonVariants({ variant: "destructive" })}`}
          >
            Delete School
          </Link>
        </aside>
      </div>
    </div>
  );
}
