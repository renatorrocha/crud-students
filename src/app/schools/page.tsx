import { db } from "~/server/db";
import DataTable from "../../components/data-table";
import { columns } from "./_components/columns";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

export default async function SchoolsPage() {
  const schools = await db.schools.findMany({});

  return (
    <div className="flex flex-col items-end gap-4">
      <Link href="/schools/new" className={buttonVariants()}>
        New School
      </Link>

      <div className="w-full">
        <DataTable data={schools} columns={columns} />
      </div>
    </div>
  );
}
