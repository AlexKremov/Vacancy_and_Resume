import React from 'react';
import { Routes, Route } from 'react-router-dom';


import { Resultpage } from './pages/ResultPage';
import { Resumepage } from './pages/ResumePage';
import { Vacancypage } from './pages/VacancyPage';
import { Main } from './pages/Main';
import { Testpage } from './pages/TestPage';





function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/resume" element={<Resumepage />} />
      <Route path="/vacancy" element={<Vacancypage />} />
      <Route path="/search" element={<Resultpage />} />
      <Route path="/test" element={<Testpage />} />


    </Routes>
  );
}

export default App;
