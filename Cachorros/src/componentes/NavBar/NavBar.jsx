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
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import './NavBar';
const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'2vh'} w={100%} >
      <Heading ml={4}>Logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaAngleDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </div>
  );
};

export default NavBar;
