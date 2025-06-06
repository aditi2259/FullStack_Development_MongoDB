import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <ProductList />
      <ProductDetails />
    </div>
  );
}

export default App;