import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductData = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-600">&larr; Back to Products</Link>
      <div className="flex flex-col md:flex-row items-center gap-6 mt-6 border p-6 rounded-lg shadow-lg">
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-lg text-green-600 font-bold mt-3">${product.price}</p>
          <p className="text-sm text-yellow-500 mt-1">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
