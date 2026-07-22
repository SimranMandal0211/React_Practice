import Auth from "./features/auth/Auth";
import ProductList from "./features/products/product";
import Wishlist from "./features/wishlist/Wishlist";

function App() {
  return (
    <>
      <h1>Authentication</h1>

      <Auth />

      <ProductList />

      <Wishlist />
    </>
  );
}

export default App;