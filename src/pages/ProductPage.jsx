import { useParams } from "react-router-dom";
import { Loader } from "../components/Loader";
import { MOCKAPI_URL } from "../lib/env";
import { useAxiosGet } from "../lib/hooks/useAxiosGet";

export function ProductPage() {
  const { id } = useParams();
  const { data, loading, error } = useAxiosGet(`${MOCKAPI_URL}/products/${id}`);

  const renderContent = () => {
    if (error) {
      return <div className="bg-red-300 p-3">Data fetching failed.</div>;
    } else if (loading) {
      return <Loader />;
    } else if (data) {
      return (
        <div>
          <h1 className="text-2xl font-bold mb-3">{data.name}</h1>
          <div>
            <img src={data.images[0].imageUrl} alt={data.name} />
          </div>
          <div className="font-bold text-xl mb-3">$ {data.price}</div>
          <div>{data.description}</div>
        </div>
      );
    }
  };

  return (
    <>
      <div className="p-5">
        <div className="font-bold text-3xl">Product Page</div>
        <div>{renderContent()}</div>
      </div>
    </>
  );
}
