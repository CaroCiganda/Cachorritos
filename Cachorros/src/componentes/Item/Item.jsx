import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
} from "@chakra-ui/react";
//Item va a ser una card, renderizamos la info de productos
const Item = ({ nombre, img, id, precio, stock }) => {
  // como puse spread en ItemList puedo elegir las propiedades del objeto prod y no pongo prod.
  return (
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
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/producto/${id}`}>Ver Detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
