import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import CategoryBacteria from './pages/CategoryBacteria';
import BacteriaDetail from './pages/BacteriaDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/category/:categoryName" element={<CategoryBacteria />} />
          <Route path="/bacteria/:bacteriaName" element={<BacteriaDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
