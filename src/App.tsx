import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import CourseDetailed from './pages/CourseDetailed/CourseDetailed';
import Institutions from './pages/Institutions/Institutions';
import ProjectsDetailed from './pages/ProjectsDetailed/ProjectsDetailed';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="about-me" element={ <AboutMe /> } />
        <Route path="skills" element={ <Skills /> } />
        <Route path="projects" element={ <Projects /> } />
        <Route path="projects/:id" element={ <ProjectsDetailed /> } />
        <Route path="education" element={ <Education /> } />
        <Route path="education/:id" element={ <CourseDetailed /> } />
        <Route path="institutions/:id" element={ <Institutions /> } />
        <Route path="contact" element={ <Contact /> } />
        <Route path="/*" element={ <NotFound /> } />
      </Route>
    </Routes>
  );
}

export default App;
