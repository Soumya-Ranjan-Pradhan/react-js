import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition">
              <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-3" />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-700 text-sm truncate">{product.description}</p>
              <div className="flex justify-between items-center mt-3">
                <span className="text-green-600 font-bold">${product.price}</span>
                <span className="text-yellow-500 text-sm">⭐ {product.rating.rate} ({product.rating.count})</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
