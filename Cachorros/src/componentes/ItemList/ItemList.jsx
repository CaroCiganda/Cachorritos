import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Item from '../Item/Item'
//para recorrer el array y crear una card para cada producto
const ItemList = ({productos}) => { //recibe productos del padre ItemListContainer
    console.log (productos)
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'}>
        {
        productos.map((prod) => (
            <Box key={prod.id}> 
                <Item {...prod}/>
            </Box>
        ))
        }
    </Flex>
  )
} 

export default ItemList