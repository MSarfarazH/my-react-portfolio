import './App.css';
import NavHeader from './components/NavHeader/NavHeader'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import AboutMe from './components/AboutMe/AboutMe'

function App() {
  return (
    <div className="">
      <NavHeader/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
