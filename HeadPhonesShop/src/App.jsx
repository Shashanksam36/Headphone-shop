import React,{ useEffect} from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { UpdateFollower } from 'react-mouse-follower'
import AOS from 'aos';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import BannerText from './components/Banner/BannerText';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';
function App() {
  // useEffect(()=>{
  //   AOS.init({
  //     offset:100,
  //     duration:800,
  //     easing: "ease-in-sine",
  //     delay:100,
  //   });
  // },[])

  return (
    <main className='overflow-x-hidden'>
      <UpdateFollower 
      mouseOptions={{
        backgroundColor:'white',
        zIndex:999,
        followSpeed:1.5,
      }}>
        <Navbar/>
        <Hero/>
        <UpdateFollower 
      mouseOptions={{
        backgroundColor:'black',
        zIndex:999,
        followSpeed:1.5,
      }}>
        <Services/>
        <Banner/>
        <BannerText/>
        <Blogs/>
        <Footer/>
      </UpdateFollower>
      </UpdateFollower>
    </main>
  )
}

export default App
