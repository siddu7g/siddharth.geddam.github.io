import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Research } from './pages/Research';
import { CoastAutonomous } from './pages/CoastAutonomous';
import { MLProjects } from './pages/MLProjects';
import { RoboticsProjects } from './pages/RoboticsProjects';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/coast-autonomous" element={<CoastAutonomous />} />
        <Route path="/ml-projects" element={<MLProjects />} />
        <Route path="/robotics" element={<RoboticsProjects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
