import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './nav';
import {Route, Routes} from 'react-router';
import Home from './Home';
import Tutorials from './Tutorials';
import Quizzes from './Quizzes';
import CSE from './CSE';
import QuizComponent from './QuizComponent';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tutorials' element={<Tutorials/>}/>
        <Route path='/Quizzes' element={<Quizzes/>}/>
        <Route path='/CSE' element={<CSE/>}/>
        <Route path='/Quizzes/cobra-kai-fruit' element={<QuizComponent title="What is your favorite basic fruit" />}/>
      </Routes>
    </div>
  );
}

export default App;
