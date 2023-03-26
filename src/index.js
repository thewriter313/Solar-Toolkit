import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import About from './pages/about/about'
import Home from "./pages/home/home";
import Toolkit from './pages/toolkit/toolkit'
import Info from './pages/info/info'
import Catalogue from "./pages/catalogue/catalogue";

export default function App() {
  return (
    <BrowserRouter basename="/Solar-Toolkit">
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="toolkit" element={<Toolkit />} />
          <Route path="info" element={<Info />} />
          <Route path="catalogue" element={<Catalogue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);