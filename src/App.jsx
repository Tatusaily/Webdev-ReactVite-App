import './App.css';
import Home from './components/Home';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Profile } from './components/Profile';
import  Upload from './components/Upload';
import Layout from './components/Layout';
import Single from './components/Single';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="upload" element={<Upload />} />
        <Route path="element/:id" element={<Single />} />
      </Route>
    </Routes>
  </Router>
);
export default App;