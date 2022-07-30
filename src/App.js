import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Navigation from "./components/Navigation/Navigation";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/reviews' element={<Reviews/>}/>
        <Route path ='/dashboard' element={<Dashboard/>}/>
        <Route path ='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
