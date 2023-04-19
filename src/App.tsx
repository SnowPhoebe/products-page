import {Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import ProductPage from './components/ProductPage';
import React, { useState } from 'react';


function App() {
  return <Grid templateAreas={`"nav nav" "main main"`}>
    <GridItem area = 'nav'>
      <NavBar/>
    </GridItem>
    {/* <GridItem area = 'aside' bg = 'gold'>Aside</GridItem> */}
    <GridItem area = 'main'>
      <div className="App">
      <ProductPage />
      </div>
    </GridItem>

    
  </Grid>
}

export default App
 