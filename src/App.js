import './App.css';
import './Assets/css/style.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Allproducts from './components/Allproducts';
import Cart from './components/Cart';
import Contact from './components/Contact';
import AdminLogin from './components/Admin/AdminLogin';
import Layout from './components/Admin/Layout';
import Dashboard from './components/Admin/Dashboard';
import Product from './components/Admin/Product';
import AddProducts from './components/Admin/AddProducts';
import Footer from './components/Footer';
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout';


function App() {
  return (
    <div className="App">

      {/* For Routing */}
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/allproducts' element ={<Allproducts/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/contact' element ={<Contact/>}/>
      <Route path='/adminlogin' element ={<AdminLogin/>}/>
      
      <Route path='/admin' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='/admin/Product' element={<Product/>}/>
        <Route path='/admin/AddProduct/' element={<AddProducts/>}/>
        <Route path='/admin/AddProduct/:id' element={<AddProducts/>}/>
      </Route>
      <Route path='/checkout' element ={<Checkout/>}/>
     
      </Routes>
      <Footer/>
      </BrowserRouter>
    

      
    </div>
  );
}

export default App;
