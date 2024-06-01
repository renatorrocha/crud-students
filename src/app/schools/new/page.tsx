import dynamic from "next/dynamic";

const SchoolForm = dynamic(() => import("../_components/school-form"), {
  ssr: false,
});

export default function NewSchoolForm() {
  return <SchoolForm />;
}
