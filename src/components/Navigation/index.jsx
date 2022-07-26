import { useState } from "react";
import { useTransition } from "react-spring";
import { Drawer } from "./Drawer";
import { Overlay } from "./Overlay";
import { Toggle } from "./Toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayTransitions = useTransition(isOpen, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const drawerTransitions = useTransition(isOpen, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
  });

  return (
    <nav>
      <Toggle isOpen={isOpen} toggle={setIsOpen} />

      {overlayTransitions(
        (styles, item, key) =>
          item && <Overlay styles={styles} toggle={setIsOpen} key={key} />
      )}

      {drawerTransitions(
        (styles, item, key) =>
          item && <Drawer styles={styles} toggle={setIsOpen} key={key} />
      )}
    </nav>
  );
}
