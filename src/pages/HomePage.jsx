import { Loader } from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { MOCKAPI_URL } from "../lib/env";
import { useAxiosGet } from "../lib/hooks/useAxiosGet";

export function HomePage() {
  const { data, loading, error } = useAxiosGet(
    `${MOCKAPI_URL}/products?page=1&limit=10`
  );

  const renderContent = () => {
    if (error) {
      return <div className="bg-red-300 p-3">Data fetching failed.</div>;
    } else if (loading) {
      return <Loader />;
    } else if (data) {
      return (
        <div className="mb-5">
          {data.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.images[0].imageUrl}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <div className="p-5">
        <div className="font-bold text-3xl">Hi 👋, I'm Louis</div>
        {renderContent()}
      </div>
    </>
  );
}
