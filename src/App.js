import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeading from './Components/Home Page/MainHeading';
import Footer from './Components/Footer/Footer';
import Menupage from './Components/Menu page/Menupage';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Login from './Components/login-register/login/login';
import Register from './Components/login-register/register/register';
import About from './Components/About Page/About';
import NavBar from './Components/Header/Navbar';

function App() {
  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element = {<MainHeading/>}/>
        <Route path="/About" element = {<About/>}/>
        <Route path="/MenuPage" element = {<Menupage/>}/>
        <Route path="/Login" element = {<Login/>}/>
        <Route path="/Register" element = {<Register/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
