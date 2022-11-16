import React from "react";
import { useGlobalContext } from "./context";

const Hero = () => {
  const data = useGlobalContext();
  return <h2>Hero</h2>;
};

export default Hero;
