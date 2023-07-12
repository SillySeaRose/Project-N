import './App.css';
import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import NavegationBar from './Components/NavegationBar';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <> 
    {/* Routes Area */}
      <NavegationBar></NavegationBar>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='shop' element={<Shop/>}></Route>
          <Route path='about' element={<About/>}></Route>
        </Routes>
    </>
  );
}

export default App;
