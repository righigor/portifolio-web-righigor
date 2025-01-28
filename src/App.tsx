import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LandingPage from './pages/landingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/landing-page/:nome" element={ <LandingPage /> } />
      <Route path="*" element={ <h1>Not Found</h1> } />
    </Routes>
  );
}

export default App;
