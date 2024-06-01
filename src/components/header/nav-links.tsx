"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";

const navLinks = [
  { label: "Schools", href: "/schools" },
  // { label: "Students", href: "/students" },
  // { label: "Users", href: "/users" },
];

export default function NavLinks() {
  const currentPath = usePathname();

  return (
    <div className="flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={cn(
            "transition-all hover:scale-105 hover:text-primary",
            currentPath == link.href && "text-primary/90",
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
