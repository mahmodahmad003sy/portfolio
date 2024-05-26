import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <About />
    </>
  );
}

export default App;
