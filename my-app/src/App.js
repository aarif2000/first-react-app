import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
  <>
    <Navbar/>
    <div className= "container">
    <About/>
    </div>
  </>
  );
}

export default App;
