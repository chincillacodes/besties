import logo from './logo.svg';
import './App.css';
import cat from './cat.png';
import Typed from "react-typed"
import { BrowserRouter, Route, Switch, Routes, useNavigate } 
from 'react-router-dom';
import Reasons from './Reasons';
import Home from './Home';
import LoveLetter from './LoveLetter';
import heart from './blk_heart.png';

function App() {

  return (
    <div className="App">
    

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/loveu" element={<LoveLetter/>}></Route>
        <Route path="/reasons" element={<Reasons/>}></Route>
      </Routes>
      
    </BrowserRouter>

    </div>

    
  );
}

export default App;

// Cat page
// must click cat and pet it three times to enable
// continue button


// Reasons page
// Scrollable story
// first we worked together on ml
// met u at a cafe
// then u said u liked coconuts and i wanted to leave
// but u wrote me cards and we saw cats and ate acai bowls
// i love hearing u talk
// i hope we can eat more bowls together and pet cats
// u tryna eat pancakes and paint pics?