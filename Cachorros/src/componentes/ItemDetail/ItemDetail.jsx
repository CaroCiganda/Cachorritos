import React, { useContext, useState } from "react";
import { Button, ButtonGroup, CardFooter, Divider } from "@chakra-ui/react";
import { Card, CardBody, Heading, Image, Stack, Text, Flex, Link as ChakraLink } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from "react-toastify";
import Context from "../../context/CartContext";
import { productos } from "../../data/asyncMock";
import { Link } from 'react-router-dom';


const ItemDetail = ({ nombre, descripcion, id, img, precio, stock }) => {
  const [quantity, setQuantity] = useState(0)
  const { addItem } = useContext(Context); // vamos a consumir a la función addItem y paso por parametro  nuestro contexto
  const onAdd = (quantity) => {
    //la funcion onAdd recibe cantidad
    const item = {
      //creo este objeto con 3 props del producto
      id,
      nombre,
      precio,
    };
    setQuantity(quantity);
    addItem(item, quantity); //la funcion addItem recibe producto y cantidad
    toast(`Agregaste ${quantity} productos`);
  };

  return (
    <div>
      <Card maxW="sm" m={3}>
        <CardBody>
          <Image
            src={img}
            alt={nombre}
            w={"350px"}
            h={"350px"}
            objectFit={"cover"}
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{nombre}</Heading>

            <Text color="blue.600" fontSize="2xl">
              ${precio}
            </Text>
            <Text>Descripción: {descripcion}</Text>
          </Stack>
        </CardBody>
        <Divider /> 
        <CardFooter>
          <ButtonGroup spacing="2">
            <Flex w={"100%"} h={"10%"} justify={"center"} align={"center"} pb={5}>
              {
                quantity === 0 ?
                <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
                : // puedo poner a cont fragment etiqueta invisible y no div para no romper estructuras o etiqeuta contenedora como Flex
                <Flex direction={'column'}> 
                <ChakraLink as ={Link} to='/cart'>Ir al Carrito</ChakraLink>
                <ChakraLink as ={Link} to='/'>Seguir comprando</ChakraLink>
                </Flex>
              }
            </Flex>
          </ButtonGroup>
        </CardFooter>
        <ToastContainer />
      </Card>
    </div>
  );
};

export default ItemDetail;
