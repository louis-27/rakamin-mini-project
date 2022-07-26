import { animated } from "react-spring";

export function Overlay({ styles, toggle }) {
  return (
    <animated.div
      style={styles}
      className="bg-black-t-50 fixed top-0 left-0 bottom-0 right-0 z-50"
      onClick={() => toggle(false)}
    ></animated.div>
  );
}
