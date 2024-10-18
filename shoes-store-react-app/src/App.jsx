
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Layout from './Layout.jsx';
import Products from './pages/products/Products.jsx'
import Offers from './pages/offers/Offers.jsx';
import Collections from './pages/collections/Collections.jsx';
import SignUpComponent from './pages/signup/SignUpComponent.jsx';
import ErrorComponent from './pages/common/ErrorComponent.jsx';
import Contact from './pages/contact/Contact.jsx'; 


function App() {
  console.log(`console.log added`);
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Layout />}> 
          <Route index element={<Products />} />
          <Route path="offers" element={<Offers />} /> 
          <Route path="collections" element={<Collections />} /> 
          <Route path="contact" element={<Contact />} /> 
          <Route path="sign-up" element={<SignUpComponent />} />  
        </Route>
        <Route path="*" element={<ErrorComponent />} />  
      </Routes>
    </Router>
  )
}

export default App;
