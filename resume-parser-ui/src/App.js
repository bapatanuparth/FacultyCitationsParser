import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import Hero from './components/hero/Hero';
       

function App() {
  return (
 
      <div className="App">
        {/* <Hero></Hero> */}
      <Home></Home>
      </div>
 
  );
}

export default App;
