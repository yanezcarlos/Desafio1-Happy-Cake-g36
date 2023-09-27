import { Container } from "react-bootstrap";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div className="mt-5">
      <Container className="text-center">
        <h1>
          Bienvenido a <span>Happy Cake</span>
        </h1>
        <h5>El lugar de los pasteles felices</h5>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRppgI-f1R8b0sdetEjTiV_6sv7uUYZ43-IUQ&usqp=CAU"
          alt="Pastel"
        />
      </Container>
    </div>
  );
};

export default Home;
