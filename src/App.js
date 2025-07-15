import "./App.css";
import React from "react";
import Header from "./Header";
import Nav from "./Components/Nav";
import Main from "./Main";
import Footer from "./Footer";
import "./Layout.css";

function App() {
  return (
    <main className="app-container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </main>
  );
}

export default App;
