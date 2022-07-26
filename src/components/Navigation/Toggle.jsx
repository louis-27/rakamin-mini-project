import { MenuIcon, XIcon } from "@heroicons/react/outline";

export function Toggle({ toggle, isOpen }) {
  return (
    <button
      className="border border-gray-300 p-2 rounded-md"
      onClick={() => toggle((state) => !state)}
    >
      {isOpen ? (
        <XIcon className="h-5 w-5" />
      ) : (
        <MenuIcon className="h-5 w-5" />
      )}
    </button>
  );
}
