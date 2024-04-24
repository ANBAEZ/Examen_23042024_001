import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/login/login';
import Productos from './pages/Productos/productos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login className="app-container" />} />
        <Route path="/productos" element={<Productos />} />
        // otras rutas
      </Routes>
    </Router>
  );
}

export default App;
