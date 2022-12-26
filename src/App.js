import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import MainHeading from './Components/MainHeading';
import Footer from './Components/Footer';
import Foodfav from './Components/Foodfav';
import NewF from './Components/NewF';
import Menu from './Components/Menu';
import Menupage from './Components/Menu page/Menupage';
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
// import { Navbar } from 'react-bootstrap';
import Login from './Components/login-register/login/login';
import Register from './Components/login-register/register/register';
import About from './About/about';



function App() {
  return (
    <>
    <NavBar/>
    {/* <NavBar/> */}
    {/* <Menu/> */}
    {/* <MainHeading/>
    <NewF/>
    <Foodfav/>
    <Footer/> */}
    { /* <Cart/> */ }
    {/* <NavBar/>
    <MainHeading/>
    <NewF/>
    <Foodfav/>
    <Footer/> */}
    {/* <NavBar/>
    <Menupage/>
    <Footer/> */}
    {/* <Menupage/> */}
    {/* <NavBar/> */}
    {/* <Router>
      <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/about" element={<About/>}/>
        <Route path="/menu" element={<Menupage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
     </Router> */}
    <Footer/>
    </>
  );
}

export default App;
