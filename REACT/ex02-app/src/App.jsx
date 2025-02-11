import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind CSS 포함

function App() {
  return (
    <div className="bg-aqua-200 min-h-screen">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
