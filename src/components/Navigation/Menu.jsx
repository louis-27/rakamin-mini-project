import { Link } from "react-router-dom";

const ROUTES = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Product", url: "/product" },
];

export function Menu({ toggle }) {
  return (
    <div className="mt-10">
      <ul>
        {ROUTES.map((i) => (
          <li className="py-4 px-2 border-b border-gray-400">
            <Link to={i.url} onClick={() => toggle((state) => !state)}>
              {i.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
