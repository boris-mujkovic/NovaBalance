import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import ContactModal from "./components/Modal";
import ServicesPage from "./components/Pages/Services";

const App: React.FC = () => {
  return (
    <div
      id="homepage"
      className="min-h-screen flex flex-col font-lato overflow-x-hidden"
    >
      <Header />
      <ContactModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usluge" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
