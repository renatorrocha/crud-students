import type { School } from "@prisma/client";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "~/components/ui/table";

interface Props {
  data: School[];
}

export default function DataTable({ data }: Props) {
  return (
    <div className="mt-5 w-full">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader className="bg-gray-600/20">
            <TableRow>
              <TableHead className="w-32 border">
                <div className="flex justify-center">Name</div>
              </TableHead>
              <TableHead className="w-32">Email</TableHead>
              <TableHead className="w-[100px]">
                <div className="flex justify-center">Status</div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((school) => (
              <TableRow key={school.id}>
                <TableCell className="border font-medium">
                  {school.name}
                </TableCell>
                <TableCell className="border">{school.email}</TableCell>
                <TableCell className="border text-right">
                  {school.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
