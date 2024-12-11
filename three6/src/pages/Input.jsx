import Header from "../components/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Helps with navigation
import { Form } from "react-bootstrap"; // Import Form from react-bootstrap
import "../App.scss";

// window form START
function WindowForm({ onSubmit }) {
  const [numWindows, setNumWindows] = useState("");
  const [frameColor, setFrameColor] = useState("");
  const [glassColor, setGlassColor] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onSubmit(numWindows, frameColor, glassColor);
  };

  return (
    <Form onSubmit={submitForm} className="form">
      <Form.Group className="mb-3">
        <Form.Label>Numero di finestre</Form.Label>
        <Form.Control
          type="number"
          placeholder="inserisci un numero"
          value={numWindows}
          onChange={(e) => setNumWindows(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Colore del frame</Form.Label>
        <Form.Control
          type="text"
          placeholder="inserisci un colore frame"
          value={frameColor}
          onChange={(e) => setFrameColor(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Colore del vetro </Form.Label>
        <Form.Control
          type="text"
          placeholder="inserisci un colore vetro"
          value={glassColor}
          onChange={(e) => setGlassColor(e.target.value)}
          required
        />
      </Form.Group>

      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </Form>
  );
}
// window form END

function Input() {
  const navigate = useNavigate();

  const handleNavigateToOutput = () => {
    navigate("/output");
  };

  const handleFormSubmit = (numWindows, frameColor, glassColor) => {
    // Store the values in local storage
    localStorage.setItem("initialNumber", numWindows);
    localStorage.setItem("initialColor", frameColor);
    localStorage.setItem("initialColor2", glassColor);
    // Optionally navigate to the output page here
    handleNavigateToOutput();
  };

  return (
    <div>
      <Header />
      <WindowForm onSubmit={handleFormSubmit} />
      {/* Button to navigate to output page can be optional now */}
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleNavigateToOutput}
      >
        Go to Output Page
      </button>
    </div>
  );
}

export default Input;
