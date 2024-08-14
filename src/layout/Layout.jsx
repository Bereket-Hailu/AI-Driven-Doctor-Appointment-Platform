import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routers/AppRoutes';
import AppRoutes from '../routers/AppRoutes';

const Layout = () => {
  return <>
  <Header />
  <main>
   <AppRoutes /> 
  </main>
  <Footer />
  </>
}

export default Layout;
