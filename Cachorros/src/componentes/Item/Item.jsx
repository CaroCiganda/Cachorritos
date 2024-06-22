import React from "react";
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
//Item va a ser una card
const Item = ({ nombre, img, precio }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={img}
          alt={'nombre'}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nombre}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Comprar
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Agregar al Carrito
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>

    /*  <div>
    <p>{nombre}</p>
  </div> */
  );
};

export default Item;
