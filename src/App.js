import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Backend from './components/Backend';
import GrabGetGo from './components/GrabGetGo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/grabgetgo" element={<GrabGetGo />} />
          <Route exact path="/api" element={<Backend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;