import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Privacy from './components/Privacy';
import Backend from './components/Backend';
import Oregano from './components/Oregano';
import MrmacForms from './components/MrmacForms';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacy/:id" element={<Privacy />} />
          <Route exact path="/api" element={<Backend />} />
          <Route exact path="/oreganosage" element={<Oregano />} />
          <Route exact path="/mrmacForms" element={<MrmacForms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;