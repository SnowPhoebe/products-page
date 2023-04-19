import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo3.png'
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Image src={logo} boxSize='60px'/>
        {/* <Text> Products </Text> */}
      </div>
      {/* <div className="navbar-cart">
        <CartCounter />
      </div> */}
    </nav>
    // <HStack>
    //     <Image src={logo} boxSize='60px'/>
    //     <Text> NavBar </Text>
    // </HStack>
  )
}

export default NavBar
