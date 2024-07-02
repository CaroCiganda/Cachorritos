import { Button, ButtonGroup, CardFooter, Divider } from '@chakra-ui/react'
import { Card, CardBody, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({nombre, descripcion,id, img, precio, stock }) => {
   console.log(nombre)
  return (
    <div> 
      <Card maxW='sm' m={3}>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          w={'350px'}
          h={'350px'}
          objectFit={'cover'}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>

          <Text color='blue.600' fontSize='2xl'>
            ${precio}
          </Text>
          <Text>Descripción: {descripcion}</Text>
        </Stack>
      </CardBody>
      <Divider/>
      <CardFooter>
        <ButtonGroup spacing='2'>
          
          <ItemCount initialValue={1} stock={stock}/>
        </ButtonGroup>
      </CardFooter>
    </Card>

    </div>
  )
}

export default ItemDetail