import Link from "next/link";
import DataTable from "~/components/data-table";
import { buttonVariants } from "~/components/ui/button";
import { db } from "~/server/db";

export default async function StudentsPage() {
  const students = await db.students.findMany();

  return (
    <div className="flex flex-col items-end gap-4">
      <Link href="/students/new" className={buttonVariants()}>
        New Student
      </Link>

      <div className="w-full">
        {/* <DataTable data={students} columns={columns} /> */}
      </div>
    </div>
  );
}
