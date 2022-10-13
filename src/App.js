import './App.css';
import Home from './pages/home';
import BoxModel from "./pages/BoxModel"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/box" exact element={<BoxModel/>} />
        </Routes>
      </Router>
  );
}

export default App;
