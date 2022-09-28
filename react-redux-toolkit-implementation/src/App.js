import './App.css';
import Navbar from './components/Navbar'
import Products from './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
