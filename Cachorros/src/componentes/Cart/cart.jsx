import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
    Text,
    Link as ChakraLink
  } from '@chakra-ui/react'
  import Context from '../../context/CartContext'
import {Link} from 'react-router-dom'
const Cart = () => {
    const {cart, removeItem, clearCart, getTotalPrice} = useContext (Context)

    if(cart.length === 0){
        return(
        <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
            <Text>Todavía no agregaste productos al carrito</Text>
            <ChakraLink as={Link} to='/' color={'#114F5A'}>Ver Productos</ChakraLink>
        </Flex>
        )
    } else {
  return (
    <TableContainer>
    <Table variant='striped' colorschema='green'>      
      <Thead>
        <Tr>
          <Th>Producto</Th>
          <Th>Cantidad</Th>
          <Th>Precio</Th>
          <Th>Subtotal</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {
        cart.map((prod) => (
        <Tr  key={prod.id}>
          <Td>{prod.nombre}</Td>
          <Td>{prod.quantity}</Td>
          <Td>{prod.precio}</Td>  
          <Td>{prod.quantity*prod.precio}</Td>
          <Td>
            {
                <Button onClick={() => removeItem(prod.id)}>eliminar</Button>
            }
          </Td>
        </Tr>
        ))
        }
      </Tbody>     
    </Table>
    <Flex>
        <Heading>  Total:  {getTotalPrice()} </Heading>
        <Button onClick={() => clearCart()}>Vaciar el Carrito</Button>
        <Heading>Finalizar compra</Heading>
    </Flex>
  </TableContainer>
  )
}
}

export default Cart