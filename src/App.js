
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import NewOffer from './components/offers/NewOffer';
import Nav from './components/navbar/Nav';
import Footer from './components/Footer/Footer';
import About from './components/about/About';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      
    <Router>
      <Nav/>
      <Routes>
        
        <Route index element={<Home/>}></Route>  
        <Route path='/*' element={<h1>error page</h1>}></Route>
        <Route path='/newoffer' element={<NewOffer/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/Login-signup' element={<Login/>}></Route>
      </Routes>
    <Footer/>
    </Router>
  </div>
  );
}

export default App;
