import './App.css';
import Landing from '../src/components/landing';
import Gallery from '../src/components/Gallery';
import Contact  from './components/Contact';
import About from './components/About';
import  Navbar from './components/Navbar';


function App() {
  return (
    <div>
      < Navbar />
      < Landing />
      < Gallery />
      < About />
      < Contact />
    </div>
    )
    
}

export default App;
