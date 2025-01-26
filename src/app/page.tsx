"use client";
import Hero from "./components/Hero";
import FirstComponent from "./components/MainpageComponents/FirstComponent";
import SecondComponent from "./components/MainpageComponents/SecondComponent";

export default function Home() {
  return (
    <main
      style={{
        display: "flex flex-col",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Hero />

      <FirstComponent />
      <SecondComponent />
    </main>
  );
}
