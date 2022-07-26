import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { Menu } from "./Menu";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <MenuIcon
        className="h-5 w-5"
        onClick={() => setIsOpen((state) => !state)}
      />
    </nav>
  );
}
