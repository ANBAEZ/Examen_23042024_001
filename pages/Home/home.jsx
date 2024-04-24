import React from 'react';
import NavigationBar from './NavigationBar';
import ImageCarousel from './ImageCarousel';
import InfoSection from './InfoSection';

function Home() {
  return (
    <div>
      <NavigationBar />
      <ImageCarousel />
      <InfoSection />
    </div>
  );
}

export default Home;