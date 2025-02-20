import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductData from "./ProductData";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductData />} />
      </Routes>
    </Router>
  );
};

export default App;
