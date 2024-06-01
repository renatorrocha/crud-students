import dynamic from "next/dynamic";
import BackButton from "~/components/back-button";

const SchoolForm = dynamic(() => import("../_components/form"), {
  ssr: false,
});

export default function NewSchoolForm() {
  return (
    <div className="flex flex-col gap-4">
      <BackButton href="/schools" />

      <SchoolForm />
    </div>
  );
}
