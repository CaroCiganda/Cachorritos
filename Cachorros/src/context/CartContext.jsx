import React, { createContext, useState } from "react";
//creamos contexto
const Context = createContext(); // variable  Context y usar funcion createContext de React para crear contexto
export const CartContextProvider = ({ children }) => {
  // definir funcion proveedora que envuelve nuesra app. De estados funciones, lo que sea. Recibe children la app
  const [cart, setCart] = useState([]); //estado para guardar los valores del carrito

  const addItem = (productToAdd, quantity) => {
    const newItem = {
      //creamos nuevo objeto desglosando los productos que recibe por par y agregamos cantidad
      ...productToAdd,
      quantity,
    };
    const isInCart = cart.some((prod) => prod.id === newItem.id); //metodo some devuelve true si son iguales

    if (isInCart) {
      //si es true actualizamos el carrito
      const updatedCart = cart.map((prod) => //recorro los productos del carrito
        prod.id === newItem.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, newItem]); //actualiza estado
    }
   
  };
  console.log(cart);

  const removeItem = (id) => {
    const updatedCart = cart.filter((prod) => prod.id !== id) //guarda en el carrito los prod.id != de id
     setCart(updatedCart)
  }

  const clearCart = () =>{
    setCart([])
  }


  const getQuantity = () => {
    let total = 0
    cart.forEach ((prod) => {
        total = total + prod.quantity        
    })
    return  total
  }

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((actual, item) => actual + item.precio * item.quantity, 0)//param valor actual e item por el que itera
    return totalPrice
    console.log(cart)
  }
  
  return (
    <Context.Provider // el proveedor del contexto que tiene un value. Adentro de value estan todos los valores, estados,etc a disposición de los componentes hijos de nuestro contexto
      value={{
        cart,
        addItem, //datos
        removeItem,
        clearCart,
        getQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
