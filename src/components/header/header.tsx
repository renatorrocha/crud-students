import Link from "next/link";
import ToggleTheme from "./toggle-theme";
import NavLinks from "./nav-links";

export default function Header() {

  return (
    <div className="flex items-center justify-between">
      <Link href="/">Logo</Link>

      <NavLinks />

      <ToggleTheme />
    </div>
  );
}
