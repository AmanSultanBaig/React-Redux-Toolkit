import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Carts from './pages/Cart'

import { Provider } from 'react-redux'
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/cart' element={< Carts />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
