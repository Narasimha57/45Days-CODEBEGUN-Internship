import React from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Content from "./components/Content";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />

      <div style={{ display: 'flex', flex: 1 }}>
        <SideNav />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;