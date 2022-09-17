import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import './index.css';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div>
      <SideBar />
      <HamburgerMenu />
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App;
