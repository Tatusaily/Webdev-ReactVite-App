import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import './App.css';
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {/* TODO: add missing routes */}
        </Route>
      </Routes>
    </Router>
  );
};
export default App;