import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter
} from "react-router-dom";
import './App.css';
import './css/base.css'
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <Router>
      <div className="App grid wide">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
