import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello it be your boi</h1>
      <nav>
        <Link to="/testing">
          This is a test to see if this works how you think it does.
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
