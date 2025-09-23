
import './App.css'
import { ItemListContainer } from './componentes/itemlistcontainer';


import { Nav } from './componentes/nav';



function App() {
  return (
  <>
  <Nav /> 
  <ItemListContainer saludo="hi"/>
  </>
  );
}

export default App;
