import '../src/App.css'
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Product from "./components/Product";
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
 <>
 <NavBar/>
 <Routes>
  <Route exact path='/' element={<Products/>}/>
  <Route exact path='/login' element={<Login/>}/>
  <Route exact path='/register' element={<Register/>}/>
  <Route exact path='/products' element={<Products/>}/>
  <Route exact path='/products/:id' element={<Product/>}/>
</Routes>
 
 
 </>
  );
}

export default App;
