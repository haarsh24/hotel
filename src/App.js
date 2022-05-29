import "./styles/main.css";
import './App.css';
import { HomePage, HotelListing } from './pages';
import { Routes ,Route} from "react-router-dom";
import { Navbar, ScrollToTop, SingleHotelPage } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelListing />} />
        <Route path="/hotels/:hotelId" element={<SingleHotelPage/>}/>
      </Routes>
      
    
    </div>
  );
}

export default App;
