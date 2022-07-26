import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="flex justify-between items-center border-b shadow px-4 py-5">
      <div className="text-xl">Rakamin Mini Project</div>

      <Navigation />
    </header>
  );
}
