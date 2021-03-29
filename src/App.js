import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <>
      <Container>
        <header className="text-center">
          <h1 className="text-dark p-3">PokeApi</h1>
        </header>
        <Pokedex />
      </Container>
      <footer className="text-center p-5">
        Made with &hearts; by Simon Villaverde
      </footer>
    </>
  );
}

export default App;
