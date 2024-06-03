import dynamic from "next/dynamic";
import BackButton from "~/components/back-button";

const StudentForm = dynamic(() => import("../_components/form"), {
  ssr: false,
});

export default function NewStudentForm() {
  return (
    <div className="flex flex-col gap-4">
      <BackButton href="/schools" />

      <StudentForm />
    </div>
  );
}
