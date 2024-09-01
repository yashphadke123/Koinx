import './App.css';
import Pages from './pages/page'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom';
import Trending from './components/trending';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Pages></Pages>
    </BrowserRouter>    
  );
}

export default App;
