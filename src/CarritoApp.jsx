import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBarComponent } from "./components/NavBarComponent";
import { ProductsPage } from "./pages/ProductsPage";
import { CartPage } from "./pages/CartPage";
import { ProductProvider } from "./context/ProductProvider";
import { CartProvider } from "./context/CartProvider";

export const CarritoApp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <ProductProvider>
      <CartProvider>
        <NavBarComponent onSearch={handleSearch} />
        <div className="container">
          <Routes>
            <Route path='/' element={<ProductsPage searchTerm={searchTerm} />} />
            <Route path='/carrito' element={<CartPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </CartProvider>
    </ProductProvider>
  );
};
