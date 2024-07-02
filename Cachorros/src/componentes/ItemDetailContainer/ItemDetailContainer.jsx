import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box } from '@chakra-ui/react'
import { CircleLoader } from 'react-spinners'

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams ()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        setLoading(true)
        getProductById (productId)
        .then((data) => setProduct(data))
        .catch((error) => console.log(error))
        .finally(() => setLoading (false) )
    }, [])
 
  return (
    <Box>
        {
        loading ?  
        <CircleLoader />
        :
        <ItemDetail {...product}/>
        }
    </Box>
    
  )
}
export default ItemDetailContainer