import logo from './logo.svg';
import './App.css';
import cat from './cat.png';
import Typed from "react-typed"
import { BrowserRouter, Route, Switch, Routes, useNavigate } 
from 'react-router-dom';
import Reasons from './Reasons';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div className="App">

    <div className="header">
        <Typed
        strings={[
            "Hi Adrian",
            "u cool lol :)",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
      </div>

      <div className="cat">
        <img src={cat} ></img>
      </div>

      <div className="startBtn">
        
        <Link to="/loveu"
        style={{ textDecoration: 'none' }}>
        <button>continue</button>

        </Link>
        
      </div>

    </div>
  );
}

export default Home;