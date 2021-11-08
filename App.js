import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Link class="link" to="/">Home</Link>
        <Link class="link" to="/about">About Us</Link>
        <Link class="link" to="/products">Products</Link>
        <Link class="link" to="/contact">Contact</Link>

      </div>

    </Router>
  );
}






export default App;