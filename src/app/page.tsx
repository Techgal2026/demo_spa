import Image from "next/image";
import React from "react";
import "./globals.css"; // Importez vos styles globaux
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Why from "../components/Why";
import Collection from "../components/Collection";
import News from "../components/News";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Collection />
      <News />
      <Footer />
    </div>
  );
}
