import React from 'react';
import SubNav from './component/subNavbar/SubNav';
import Men from './Pages/Mens/Men';
import Product from './Pages/ProductDetail/Product';
import Footer from './component/footer/Footer'
import Women from './Pages/Women/Women';
import { Route, Routes } from 'react-router-dom';
import Join from './Pages/Join/Join';
import JoinPage from './Pages/Join Page/JoinPage';
import SingIn from './Pages/SignIn/SingIn';
import Navbar from './component/Navbar/Navbar';
import Home from './Pages/home/Home';


function App() {
  return (
      <div>
        <Navbar/>
  
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/men'} element={<Men></Men>}></Route>
          <Route path={'/women'} element={<Women></Women>}></Route>
          <Route path={'/join'} element={<Join></Join>}></Route>
          {/* <Route path={'/'} element={<></>}></Route> */}

        </Routes>
<Footer/>
      </div>
  );
}

export default App;
