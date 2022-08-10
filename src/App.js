import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Error from './pages/Error';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog/:id' element={<BlogDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
