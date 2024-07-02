import { Center, Heading, Flex, Spinner } from '@chakra-ui/react'
//import React from 'react'
import { getProducts, getProductsByCategory } from '../../data/asyncMock'
import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {CircleLoader} from 'react-spinners'

const ItemListContainer = ({title}) => {

  const [productos, setProductos] = useState([]) //se inicializa como array vacio, espera varios productos
  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect (()=> {
    setLoading(true)
    const dataProductos = categoryId ? getProductsByCategory( categoryId ) : getProducts() // me trae el array con los productos
    dataProductos
    .then ((prod) => setProductos(prod)) //inicializa el estado
    .catch((error) => console.log(error))
    .finally(() => setLoading (false) )
  }, [ categoryId ])

  return (
    <Flex direction={'column'} justify={'center'} align={'Center'}>
    <Heading mt={5}>{title}</Heading>
    loading ?  
    <CircleLoader />
    :
    <ItemList productos={productos} //nombre prop = data 
    /> 
    </Flex>
  )
}

export default ItemListContainer