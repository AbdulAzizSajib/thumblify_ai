import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generation from "./pages/Generation";
import MyGeneration from "./pages/MyGeneration";
import YTPreview from "./pages/YTPreview";
import Login from "./components/login";
import { useEffect } from "react";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/generate" element={<Generation />} />
        <Route path="/generate/:id" element={<Generation />} />
        <Route path="/my-generations/:id" element={<MyGeneration />} />
        <Route path="/my-generations/" element={<MyGeneration />} />
        <Route path="/preview" element={<YTPreview />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
