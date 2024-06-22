import React from 'react'
import { IoCartOutline } from "react-icons/io5"
import { Box, Icon } from '@chakra-ui/react'
const CartWidget = () => {
  return (
    <Box boxSize="15px">
        <Icon as={IoCartOutline} boxSize="48px" />
    </Box>
  )
}

export default CartWidget