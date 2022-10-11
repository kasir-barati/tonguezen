import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Menu
        items={[
          { text: "WhoAmI", pageUrl: "#", isActive: true },
          { text: "WhereAmI", pageUrl: "#" },
          { text: "LearnSomething", pageUrl: "#" },
          { text: "ReadSomething", pageUrl: "#" },
        ]}
      ></Menu>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
