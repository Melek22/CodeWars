import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="site-header">
          <nav>
            <ul>
              <li><Link to="/">Acasă</Link></li>
              <li><Link to="/despre">Despre Noi</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} Biserica Sfinții Arhangheli Mihail și Gavril, Grozești.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
