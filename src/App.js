import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import AllReviews from './components/AllReviews/AllReviews';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/reviews' element={<AllReviews/>}/>
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
