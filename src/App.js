import './App.css';
import Pages from './pages/page'
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Pages></Pages>
    </BrowserRouter>    
  );
}

export default App;
