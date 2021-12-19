import './App.css';
import React from 'react';
import About from '../About/About';
import Layout from '../Layout/Layout';
import Contact from '../Contact/Contact';
import Products from '../Product/Products/Products';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import More from '../More/More';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Products/>} />
            <Route path="/about"  element={<About />} />
            <Route path="/contact"  element={<Contact/>} />
            <Route path="/more"  element={<More/>} />

          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
