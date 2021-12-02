import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './components/Landing';
import Home from './components/Home';
import  CreateActivity  from '..//src//components//activities//CrateActivity';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/activity" element={<CreateActivity/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
