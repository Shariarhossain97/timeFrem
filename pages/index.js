import Head from 'next/head'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Mid from './components/mid/mid';
import Upper from './components/upper/up';
import About from "../pages/about";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Upper />
      

      <Footer/>
      

      
    </div>
  )
};
