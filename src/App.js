// src/App.js
import './App.css';
import Home from './pages/home/home';
import About from './pages/about/about';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Contact from './pages/contact/contact';
import Navbar from './component/navbar/navbar';

import Refinery from './pages/services/refinery';

import Hseq from './pages/hseq/hseq';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Navbar/>}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="refinery" element={<Refinery />} />
    <Route path="hseq" element={<Hseq />} />
  </Route>
  ));
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
