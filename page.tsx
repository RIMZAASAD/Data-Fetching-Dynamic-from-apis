import React from 'react';
import Hero from './components/Hero';
import Footer from './components/Footer';

const Page = () => {  // Capitalized "Page" to follow naming conventions
  return (
    <div>
      <Hero />  {/* Correctly self-closed */}
      <Footer />  {/* Correctly self-closed */}
    </div>
  );
}

export default Page;  // Make sure to export with the capitalized name
