import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductList from "./components/ProductList";
import "./index.css"; // Tailwind CSS 포함

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <ProductList />
      <ProductCard/>
    </div>
  );
}

export default App;
