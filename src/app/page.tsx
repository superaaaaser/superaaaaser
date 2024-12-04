"use client";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Project from "../components/Project/Index";
export default function Home() {
  return (
    <div className="w-full dark:bg-zinc-950">
      <Header />
      <Hero />
      <Project />
      <Footer />
    </div>
  );
}
