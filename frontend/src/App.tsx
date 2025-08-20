import Hero from './components/hero';
import Navbar from './components/navbar';
import WhatWeDo from './components/whatwedo';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        
      </main>
      <div className='pt-24'>
        <WhatWeDo />
      </div>
      
    </>
  );
}

export default App;
