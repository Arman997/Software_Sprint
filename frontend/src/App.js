import React from "react";
import "./index.css";
import List from "./components/List";
import Header from "./components/Header"
import Main from "./components/Main";

const App = () => {
  return (
    <div className="App">
      <List/>
      <Header/>
      <Main/>
    </div>
  );
};

export default App;

