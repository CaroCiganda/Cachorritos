import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import Context from "../../context/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import Swal from 'sweetalert2'

const Checkout = () => {
  const [user, setUser] = useState({
    // estado para datos del usuario con las siguientes propiedades
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });

  const [error, setError] = useState({});
  const { cart, getTotalPrice } = useContext(Context); //para poder usar las funciones y datos  globales de Context

  const updateUser = (event) => {
    // función que actualiza los datos que se ingresan en el formulario
    
    setUser((user) => ({
      //actualiza estado
      ...user,
      [event.target.name]: event.target.value //se asigna valor al estado user que se ingresa por el input a cada propiedad
    }));
  };

  const validateForm = () => {
    const errors = {}; //el objeto errors no tiene ninguna propiedad, no hay errores, se crea la orden

    if (!user.name) {
      errors.name = "Tenes que agregar un nombre"; //se agrego una propeidad a errors
    } else if (user.name.length < 3 || user.name.length > 15) {
      //valido nombre
      errors.name = "El nombre debe tener al menos 3 letras y un máximo de 15";
    }

    if (!user.email) {
      errors.email = "Tenes que ingresar un email";
    //} else if (!/\S+@+\S+\.+\S+/.test(user.email)) {
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      //valida mail que no haya blancos al inicio, seguido de @, que no haya blancos despues de @
      errors.email = "Mail inválido";
    }

    if (!user.repeatedEmail) {
      errors.repeatedEmail = "Tenes que repetir el email";
    } else if (user.repeatedEmail != user.email) {
      //valida mail reptido igual al mail
      errors.repeatedEmail = "Los mails no son iguales";
    }

    if (!user.phone) {
      errors.phone = "Tenes que ingresar un teléfono";
    } else if (!/^\d+$/.test(user.phone)) { //que el telefono tenga sólo números
      errors.phone = "Sólo dígitos numéricos";
    }

    setError(errors);
    return Object.keys(errors).length === 0; //se cumple si el objeto no tiene ninguna propiedad
  };

  const getOrder = async () => {
    if (!validateForm()) {
      return;
    }
  if (cart.length === 0){
    Swal.fire('El carrito esta vacío');
    return
  }
    const ordersCollection = collection(db, "orders"); //conexion a la base, colección de ordenes

    try {
      const order = { //para generar la orden
        //traemos datos de Context y armamos el objeto
        buyer: user,
        cart: cart, // el producto está en cart de context
        total: getTotalPrice(), //funcion de context
        fechaDeCompra: Timestamp.now() //metodo de firebase
      };

      const orderRef = await addDoc(ordersCollection, order); //agregamos el objeto a la colección que recien creamos
      
      console.log(`El nro de orden es:  ${orderRef.id} `);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex direction={"column"} justify={"center"} align={"center"} w={"40%"}>
      <Heading color={"#03fc7b"}>Datos de facturación</Heading>
      <FormControl>
        <FormLabel color={"#f77f00"}>Nombre:</FormLabel>
        <Input type="text" name="name" onChange={updateUser} /*los input modifican las propiedades del estado*//> 
        <FormHelperText color={"#d62828"}>{error.name}</FormHelperText>
        
        <FormLabel color={"#f77f00"}>Email:</FormLabel>
        <Input type="email" name="email" onChange={updateUser} /> 
        <FormHelperText color={"#d62828"}>{error.email}</FormHelperText>
        
        <FormLabel color={"#f77f00"}>Repetir email:</FormLabel>
        <Input type="email" name="repeatedEmail" onChange={updateUser}/*e onChange le pasamos la función updateUser*/ />
        <FormHelperText color={"#d62828"}>{error.repeatedEmail}</FormHelperText>
        
        <FormLabel color={"#f77f00"}>Teléfono:</FormLabel>
        <Input type="text" name="phone" onChange={updateUser} />
        <FormHelperText color={"#d62828"}>{error.phone}</FormHelperText>
       
        <Button bg={"#f77f00"} onClick={getOrder}>Finalizar Compra</Button>
      </FormControl>
    </Flex>
  );
};

export default Checkout;
