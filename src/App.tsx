import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Contact from './pages/Contact';
import CourseDetailed from './pages/CourseDetailed';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="about-me" element={ <AboutMe /> } />
        <Route path="skills" element={ <Skills /> } />
        <Route path="projects" element={ <Projects /> } />
        <Route path="education" element={ <Education /> } />
        <Route path="education/:id" element={ <CourseDetailed /> } />
        <Route path="contact" element={ <Contact /> } />
      </Route>
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}

export default App;
