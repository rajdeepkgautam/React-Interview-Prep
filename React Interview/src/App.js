import React from 'react';

import Counter from './Component/day1/ClassCompo';
import React from 'react';
import Parent from './Component/day2/parent';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Components/day2/home'
import About from './Components/day2/about'

function App() {
  return (
    <div>
      <PtoC/>
      <BrowserRouter>
      <Routes>
        <Route path = '/Home' element = {<Home/>}/>
        <Route path = '/About' element = {<About/>}/>
        <Route path = '*' element = {<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
