import "./styles/main.css";
import './App.css';
import { HomePage, HotelListing } from './pages';
import { Routes ,Route} from "react-router-dom";
import { Navbar, ScrollToTop } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={  <HotelListing/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
