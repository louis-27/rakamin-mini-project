import { Link } from "react-router-dom";

function ProductCard({ id, name, description, price, imageUrl }) {
  return (
    <div className="border my-5 rounded overflow-hidden">
      <Link to={`/products/${id}`}>
        <div
          style={{
            backgroundImage: `url('${imageUrl}')`,
          }}
          className="w-full h-64 bg-blue bg-cover"
        ></div>
      </Link>
      <div className="p-3">
        <h3 className="font-bold text-xl mb-3">
          <Link to={`/products/${id}`}>{name}</Link>
        </h3>
        <div className="font-bold mb-3">${price}</div>
        <div className="mb-3">{description}</div>
        <Link
          to={`/products/${id}`}
          className="bg-blue-500 text-white p-2 flex justify-center w-full"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
