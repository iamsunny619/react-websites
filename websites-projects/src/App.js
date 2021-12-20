import './App.css';
import { Footer, Blog, Possibility, Feature, WhatGpt3, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (<div className="App">
    <div className="gradient_bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGpt3 />
    <Feature />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />

  </div>)
}

export default App;
