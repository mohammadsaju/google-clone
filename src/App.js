import React from "react";
import Result from "./components/Result";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Result/>}/>
          <Route path="/images" element={<Result/>}/>
          <Route path="/videos" element={<Result/>}/>
          <Route path="/news" element={<Result/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
