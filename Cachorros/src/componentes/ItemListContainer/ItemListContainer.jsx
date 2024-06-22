import { Center, Heading, Flex } from '@chakra-ui/react'
//import React from 'react'
import { getProducts } from '../../data/asyncMock'
import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
const ItemListContainer = ({title}) => {

  const [productos, setProductos] = useState([]) //se inicializa como array vacio

  useEffect (()=> {
    getProducts()
    .then ((prod) => setProductos(prod))
    .catch((error) => console.log(error))
  }, [])

  console.log (productos)
  return (
    <Flex direction={'column'} justify={'center'} align={'Center'}>
    <Heading>{title}</Heading>
    <ItemList productos={productos} /* le pasa el nombre de la prod y  la data a ItemList*/ /> 
    </Flex>
  )
}

export default ItemListContainer