import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { ItemDetailContainer } from "./componentes/ItemDetailContainer/ItemDetailContainer";
import 'react-toastify/dist/ReactToastify.css';
import { CartContextProvider } from "./context/CartContext";
import Cart from "./componentes/Cart/cart";
import Checkout from "./componentes/Checkout/Checkout";

function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer background-color = "#A4A1A1" title="Tienda de Alimentos" />}
          />
          <Route
            path="/categorias/:categoryId"
            element={<ItemListContainer background-color = "#A4A1A1" title="Tienda de Alimentos" />}
          />
          <Route
            path="/producto/:productId"
            element={<ItemDetailContainer/>}
          />
           <Route
            path='/cart/'
            element={<Cart/>}
          />
          <Route
           path='/checkout/'
           element={<Checkout/>}
          />
          <Route path="*" element={<pageNotFound/>} />
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;