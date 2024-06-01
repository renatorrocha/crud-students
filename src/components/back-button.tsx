import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 transition-all duration-300 hover:-translate-x-2 hover:font-bold"
    >
      <ArrowLeft className="size-4 text-primary" />
      <p>Back</p>
    </Link>
  );
}
