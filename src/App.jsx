import { useState, createContext } from 'react';
import NavBar from './components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import './index.scss';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import SideBar from './components/SideBar/SideBar';

export const SidebarContext = createContext();

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarActions = { isSidebarOpen, setIsSidebarOpen };
  return (
    <div>
      <SidebarContext.Provider value={sidebarActions}>
        <SideBar />
        <HamburgerMenu />
      </SidebarContext.Provider>
      <NavBar />
      <HomePage />
    </div>
  )
}

export default App;
