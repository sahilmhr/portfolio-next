import { Metadata } from "next";
import About from "./about";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Skills from "./skills";

export const metadata : Metadata = {
  title: "Sahil",
  description: "Sahil's Portfolio",
}

export default function Home() {
    return (
      <>
        <Navbar/>
        <Hero/>
        <Skills/>
        <About/>
        <Footer/>
      </>
    )
}