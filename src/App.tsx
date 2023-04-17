import {Grid, GridItem} from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import ProductPage from './components/ProductPage';
function App() {
  return <Grid templateAreas={`"nav nav" "aside main"`}>
    <GridItem area = 'nav'>
      <NavBar/>
    </GridItem>
    <div className="App">
      <ProductPage />
    </div>
    {/* /* <GridItem area = 'aside' bg = 'gold'>Aside</GridItem>
    <GridItem area = 'main' bg = 'dodgerblue'>Main</GridItem> */}

    
  </Grid>
}

export default App
 