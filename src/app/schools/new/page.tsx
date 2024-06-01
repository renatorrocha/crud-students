import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

const SchoolForm = dynamic(() => import("../_components/form"), {
  ssr: false,
});

export default function NewSchoolForm() {
  return (
    <div className="flex flex-col gap-4">
      <Link
        href="/schools"
        className="flex items-center gap-2 transition-all duration-300 hover:-translate-x-2 hover:font-bold"
      >
        <ArrowLeft className="size-4 text-primary" />
        <p>Back</p>
      </Link>

      <SchoolForm />
    </div>
  );
}
