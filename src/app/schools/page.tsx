import { db } from "~/server/db";
import DataTable from './data-table';

export default async function SchoolsPage() {
  const schools = await db.school.findMany({});

  console.log(schools);

  return <DataTable data={schools} />;
}
