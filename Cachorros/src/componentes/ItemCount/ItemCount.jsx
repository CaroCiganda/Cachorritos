import React, { useState } from 'react'
import { Button, useCounter } from '@chakra-ui/react'


const ItemCount = ({initialValue, stock, onAdd}) => {
  const{count, incrementar, decrementar} = useCounter(initialValue, stock)
  return (
    <div>
      <button onClick={decrementar}>-</button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
      <Button onClick= {() =>onAdd(count)}>Agregar al Carrito</Button>
    </div>
  )
}

export default ItemCount