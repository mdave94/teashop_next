"use client";
import { motion } from "framer-motion";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hero />
    </main>
  );
}
