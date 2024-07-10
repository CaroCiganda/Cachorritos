import { Flex, Badge } from "@chakra-ui/react";
import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Flex mr={5} color={'#03fc7b'} fontSize={'5xl'} w={'4%'} justify={'space-between'} align ={'center'}>
     <Link to='/cart'>
          <IoCartOutline className='' />
      </Link>
      <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'}>
        <Badge borderRadius={'50%'} color={'#03fc7b'} fontSize={'md'}>{getQuantity()}</Badge>
      </Flex>
    </Flex>
  );
};

export default CartWidget;