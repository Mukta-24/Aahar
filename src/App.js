import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import MainHeading from './Components/MainHeading';
import Footer from './Components/Footer';
import Foodfav from './Components/Foodfav';
import NewF from './Components/NewF';


function App() {
  return (
    <>
    <NavBar/>
    <MainHeading/>
    <NewF/>
    <Foodfav/>
    <Footer/>
    </>
  );
}

export default App;
