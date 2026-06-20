import React, { useState } from "react";

// A simple, safe, and fully functional React component
export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Handle input change safely
  const handleChange = (e) => {
    const value = e.target.value;

    // Basic validation: disallow extremely long input
    if (value.length > 50) {
      setMessage("Name is too long (max 50 characters).");
      return;
    }

    setName(value);
    setMessage("");
  };

  // Button click handler
  const handleClick = () => {
    if (!name.trim()) {
      setMessage("Please enter a valid name.");
      return;
    }
    setMessage(`Hello, ${name}! Welcome to React.`);
  };

  return (
    <div style={styles.container}>
      <h1>React JS Demo</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        style={styles.input}
      />

      <button onClick={handleClick} style={styles.button}>
        Greet Me
      </button>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

// Inline styles for simplicity
const styles = {
  container: {
    fontFamily: "Arial",
    textAlign: "center",
    padding: "40px"
  },
  input: {
    padding: "8px",
    width: "240px",
    marginRight: "10px"
  },
  button: {
    padding: "8px 16px",
    cursor: "pointer"
  },
  message: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold"
  }
};
