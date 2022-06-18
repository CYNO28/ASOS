import React from 'react';
import SubNav from './component/subNavbar/SubNav';
import Navbar from './component/Navbar/Navbar';
import Men from './Pages/Mens/Men';
import Product from './Pages/ProductDetail/Product';
import Footer from './component/footer/Footer'
import Women from './Pages/Women/Women';
import { Route, Routes } from 'react-router-dom';
import Join from './Pages/Join/Join';
// import JoinPage from './Pages/J/oin Page/JoinPage';
import SingIn from './Pages/SignIn/SingIn';
import Home from './Pages/home/Home';
import Products from './Pages/Products/ProductsM';
import Cart from './Pages/Cart/Cart';
import JoinPage from './Pages/Join Page/JoinPage';


function App() {
  return (
      <div>
        <Navbar/>
  
         <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/men'} element={<Men></Men>}></Route>/
          <Route path={'/women'} element={<Women></Women>}></Route> 
          <Route path={'/join'} element={<JoinPage></JoinPage>}></Route>
          <Route path={'/join'} element={<Join></Join>}></Route>
          <Route path={'/women/womenTop'} element={<Products/>}/>
          {/* <Route path={'/product/tops'} element={<Products/>}/> */}
           <Route path={'/cart'} element={<Cart></Cart>}></Route>
          {/* <Route path={'/'} element={<></>}></Route> */}

        </Routes>
<Footer/>
      </div>
  );
}

export default App;
