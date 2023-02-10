import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header>
      </Header>
      <Main>
        
      </Main>
      <Footer>Contenido para el footer</Footer>
    </div>
  );
}

export default App;
