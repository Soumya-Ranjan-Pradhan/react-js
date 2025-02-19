// // import React from 'react'
// // import { BioProvider } from './assets/ContextApi'
// // import Home from './assets/ContextApi/Home'

// // const App = () => {
// //   return (
// //     <BioProvider>
// //       <Home />
// //     </BioProvider>
// //   )
// // }

// // export default App

// // import React, { useReducer } from "react";

// // const App = () => {
// //   const reducer = (state, action) => {
// //     if (action.type === "INCREMENT") {
// //       return state + 1;
// //     }

// //     if (action.type === "DECREMENT") {
// //       return state - 1;
// //     }
// //   };
// //   const [count, setCount] = useReducer(reducer, 0);

// //   return (
// //     <div className="p-4 h-lvh flex flex-col justify-center items-center">
// //       <h1>{count}</h1>
// //       <button onClick={() => setCount({ type: "INCREMENT" })}>Increment</button>
// //       <button onClick={() => setCount({ type: "DECREMENT" })}>Decrement</button>
// //     </div>
// //   );
// // };

// // export default App;

// // import React, { useState } from "react";
// // import Counter from "./assets/Counter";

// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <>
// //       <div className="p-4 h-52 font-display tracking-wider flex flex-col">
// //         <h1>{count}</h1>

// //         <button
// //           className="btn bg-red-700 py-1 px-3"
// //           onClick={() => setCount((pre) => pre + 1)}
// //         >
// //           Increment
// //         </button>
// //       </div>
// //       <Counter />
// //     </>
// //   );
// // };

// // export default App;

// // import { useEffect, useState } from "react";

// // const App = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     fetch("https://api.escuelajs.co/api/v1/products")
// //       .then((response) => response.json())
// //       .then((data) => {
// //         setProducts(data);
// //         setLoading(false);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching products:", error);
// //         setLoading(false);
// //       });
// //   }, []);

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
// //       {loading ? (
// //         <p className="text-center">Loading...</p>
// //       ) : (
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //           {products.map((product) => (
// //             <div
// //               key={product.id}
// //               className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300"
// //             >
// //               <img
// //                 src={JSON.parse(product.images)[0]}
// //                 alt={product.title}
// //                 className="w-full h-48 object-cover rounded-lg mb-4"
// //               />
// //               <h2 className="text-xl font-semibold">{product.title}</h2>
// //               <p className="text-gray-600">{product.description}</p>
// //               <p className="text-lg font-bold mt-2">${product.price}</p>
// //               <p className="text-sm text-gray-500 mt-1">
// //                 Category: {product.category.name}
// //               </p>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default App;

// // src/App.jsx
// import { useEffect, useState } from "react";

// function App() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <h1 className="text-3xl font-bold text-center mb-6">Product List</h1>
//       {loading ? (
//         <p className="text-center">Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-lg font-semibold">{product.title}</h2>
//               <p className="text-gray-600 text-sm">{product.category}</p>
//               <p className="text-xl font-bold text-blue-600 mt-2">${product.price}</p>
//               <p className="text-sm text-gray-500">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

import React from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./assets/ContextApi/Home";
import AppLayout from "./layout/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
