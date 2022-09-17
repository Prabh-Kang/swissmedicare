import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import './index.css';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';

function App() {
  return (
    <div>
      <HamburgerMenu />
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App;
