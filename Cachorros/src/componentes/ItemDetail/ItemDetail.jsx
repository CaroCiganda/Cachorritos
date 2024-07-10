import React, { useContext } from "react";
import { Button, ButtonGroup, CardFooter, Divider } from "@chakra-ui/react";
import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import Context from "../../context/CartContext";
import { productos } from "../../data/asyncMock";

const ItemDetail = ({ nombre, descripcion, id, img, precio, stock }) => {
  
  const{addItem} = useContext(Context) // vamos a consumir a la función addItem y paso por parametro  nuestro contexto
    const onAdd =(quantity) => { //la funcion onAdd recibe cantidad
    const item = { //creo este objeto con 3 props del producto
       id,
       nombre,
       precio
    }
    addItem(item, quantity)   //la funcion addItem recibe producto y cantidad
    toast(`Agregaste ${quantity} productos`)
  }

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
            <ItemCount initialValue={1} stock={stock} onAdd={onAdd}/>
          </ButtonGroup>
        </CardFooter>
        <ToastContainer/>
      </Card>
    </div>
  );
};

export default ItemDetail;
