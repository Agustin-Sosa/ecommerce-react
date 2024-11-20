import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import Checkout from "./components/pages/checkout/Checkout";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Toaster duration={2000} richColors />
        <CartContextProvider>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />

              <Route path="/category/:name" element={<ItemListContainer />} />

              <Route path="/cart" element={<CartContainer />} />

              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

              <Route path="/*" element={<h2>404 not found</h2>} />

              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
