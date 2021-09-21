import './App.css';
import NavHeader from './components/NavHeader/NavHeader'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  return (
    <div className="main">
      <NavHeader/> <br></br><br></br>
      <AboutMe/> <br></br>
      <Projects/> 
      <Contact/>
    </div>
  );
}

export default App;
