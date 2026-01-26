import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import Intro from './components/Intro';
import Project from './components/Projects';
import Skills from './components/Skills';
import Conclusion  from './components/Conclusion';
// import Cp from './components/Cp';
import Experience from './components/Experience';
import CPStats from './components/Cpstats';
function App() {
  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Education></Education>
      <Project></Project>
      <CPStats></CPStats>
      <Experience></Experience>
      <Skills></Skills>
      <Conclusion></Conclusion>
    </>
          
  );
}

export default App;
