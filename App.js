import { StatusBar } from "expo-status-bar";
import React from "react";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" backgroundColor="#393C44" animated={true} />
    </>
  );
}
