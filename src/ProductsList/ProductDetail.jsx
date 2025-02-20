import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-lg p-5">Loading...</div>;
  if (error) return <div className="text-center text-lg p-5 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-5 max-w-2xl">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-72 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
      <p className="text-yellow-500 font-semibold">Rating: {product.rating}⭐</p>
      <p className="mt-3">Brand: {product.brand}</p>
      <p className="mt-3">Stock: {product.stock}</p>
      <p className="mt-3">Category: {product.category}</p>
      <p className="mt-3">SKU: {product.sku}</p>
      <p className="mt-3">Return Policy: {product.returnPolicy}</p>
      <Link
        to="/"
        className="block mt-5 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
