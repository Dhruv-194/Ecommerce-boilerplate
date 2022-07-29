import '../src/App.css'
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
 <>
 <NavBar/>
 <Routes>
  <Route exact path='/products' element={<Products/>}/>
  <Route exact path='/products/:id' element={<Product/>}/>
</Routes>
 
 
 </>
  );
}

export default App;
