import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/Landing';
import Home from './components/Home';
import  CreateActivity  from '..//src//components//activities//CrateActivity';
import DetailCountry from './components/Flags/DetailCountry';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div className='background-main'>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/activity" element={<CreateActivity/>} />
        <Route path="/home/:id" element={<DetailCountry/>} />
      </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
