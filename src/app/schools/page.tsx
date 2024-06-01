import { db } from "~/server/db";
import DataTable from "./data-table";
import { columns } from "./columns";

export default async function SchoolsPage() {
  const schools = await db.schools.findMany({});

  return <DataTable data={schools} columns={columns} />;
}
