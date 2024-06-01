import type { Status } from "@prisma/client";
import { Badge } from "./ui/badge";

interface Props {
  status: Status;
}

export default function StatusBadge({ status }: Props) {
  return (
    <Badge
      className={"lowercase"}
      variant={status !== "ACTIVATED" ? "destructive" : "default"}
    >
      {status}
    </Badge>
  );
}
