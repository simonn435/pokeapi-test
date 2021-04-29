import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokedex from "./components/Pokedex";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Pokedex />
      </Container>
      <footer className="text-center p-5">Made by Simon Villaverde</footer>
    </>
  );
}

export default App;
