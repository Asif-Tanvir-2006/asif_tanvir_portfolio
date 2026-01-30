import './App.css';
import Education from './components/Education';
import Header from './components/Header';
import Intro from './components/Intro';
import Project from './components/Projects';
import Skills from './components/Skills';
import Conclusion  from './components/Conclusion';
import Experience from './components/Experience';
import CPStats from './components/Cpstats';
import Spacer from './components/Spacer';
import ScrollIndicator from './components/ScrollIndicator';
function App() {
  return (
    <>
      <ScrollIndicator></ScrollIndicator>
      <Header></Header>
      <Spacer></Spacer>
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
