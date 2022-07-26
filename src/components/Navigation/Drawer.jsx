import { XIcon } from "@heroicons/react/outline";
import { animated } from "react-spring";
import { Menu } from "./Menu";

export function Drawer({ styles, toggle }) {
  return (
    <animated.div
      style={styles}
      className="fixed bg-white top-0 right-0 w-3/5 h-full z-50 shadow p-10"
    >
      <button
        className="border border-gray-300 p-2 rounded-md absolute top-10 right-10"
        onClick={() => toggle((state) => !state)}
      >
        <XIcon className="h-5 w-5" />
      </button>
      <Menu toggle={toggle} />
    </animated.div>
  );
}
