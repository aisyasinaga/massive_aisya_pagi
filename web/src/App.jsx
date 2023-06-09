import { useState } from 'react'
import Navbar from "./components/Navbar";
import Beranda from "./components/Beranda";
import Tentang from "./components/Tentang";
import Kontak from "./components/Kontak";
import Profil from "./components/Profil";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Beranda/>
      <Tentang/>
      <Kontak/>
      <Profil/>
      <Footer/>
    </>
  );
}

export default App;
