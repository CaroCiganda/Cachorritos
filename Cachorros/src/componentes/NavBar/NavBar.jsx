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
import "./NavBar";
const imgStyle = {
  width: '100px', // Ajusta el ancho de la imagen
  height: 'auto', // Mantiene la proporción de la imagen
  marginTop: '120px'
};
const NavBar = () => {
  return (
    <Flex
      className={"navBar"}
      justify={"space-between"}
      align={"center"}
      height={"2vh"}
      w={"100%"}
    >
      <Heading ml={4}><img src= 'logo.svg' style={imgStyle} ></img></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Acciones
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget ml={4}/>
    </Flex>
  );
};

export default NavBar;
