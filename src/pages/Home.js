import React from 'react';
import Slider from 'react-slick';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Welcome from './Welcome';

function Home() {
  return <div>
<Navbar />
<Slider />
<Welcome />
<Footer />
  </div>;
}

export default Home;
