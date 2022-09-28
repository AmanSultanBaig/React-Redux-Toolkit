import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Carts from './pages/Cart'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/cart' element={< Carts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
