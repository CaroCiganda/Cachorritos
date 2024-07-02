import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import './NavBar.css';
import { Link } from "react-router-dom";
const imgStyle = {
  width: '80px', // Ajusta el ancho de la imagen
  height: 'auto', // Mantiene la proporción de la imagen
  marginTop: '10px'
};
const NavBar = () => {
  return (
    <Flex
      className="navBar"
      justify={'space-between'}
      align={'center'}
      height={'20vh'}
      w={'100%'}
    >
      <Heading ml={4}><Link to='/'><img src= 'logo.svg' style={imgStyle} ></img></Link></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Categorías
        </MenuButton>
        <MenuList>
          <MenuItem><Link to='/categorias/Grandes'>Grandes</Link></MenuItem>
          <MenuItem><Link to='/categorias/Medianos'>Medianos</Link></MenuItem>
          <MenuItem><Link to='/categorias/Cachorros'>Cachorros</Link></MenuItem>         
        </MenuList>
      </Menu>
      <CartWidget ml={4}/>
    </Flex>
  );
};

export default NavBar;
