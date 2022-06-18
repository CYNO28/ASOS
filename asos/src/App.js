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


function App() {
  return (
      <div className="">
        <Routes>
          <Route path={'/'} element={<></>}></Route>
          <Route path={'/men'} element={<Men></Men>}></Route>
          <Route path={'/wome'} element={<Women></Women>}></Route>
          <Route path={'/join'} element={<Join></Join>}></Route>
          {/* <Route path={'/'} element={<></>}></Route> */}

        </Routes>

      </div>
  );
}

export default App;
