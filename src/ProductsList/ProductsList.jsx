import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-lg p-5">Loading...</div>;
  if (error) return <div className="text-center text-lg p-5 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-3">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <p className="text-yellow-500 font-semibold">Rating: {product.rating}⭐</p>
            <Link
              to={`/product/${product.id}`}
              className="block mt-3 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductDetail = ({ id }) => {
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
      <Link
        to="/"
        className="block mt-5 text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Back to Products
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
