import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Content from '@/pages/Contenido';
import Introduction from '@/pages/Introduction';
import Background from '@/pages/Background';
import EssentialModel from '@/pages/EssentialModel';
import AmbientalModel from '@/pages/AmbientalModel';
import BehaviorModel from '@/pages/BehaviorModel';
import DP from '@/pages/DP';
import DC from '@/pages/DC';
import LA from '@/pages/LA';
import AE from '@/pages/AE';
import Mcun from '@/pages/Mcun';
import Mcus from '@/pages/Mcun';
import Cune from '@/pages/Cune';
import ObjectOriented from '@/pages/ObjectOriented';
import V from '@/pages/V';
import C from '@/pages/C';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-1 w-full px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/content" element={<Content />} />
              <Route path="/introduction" element={<Introduction />} />
              <Route path="/background" element={<Background />} />
              <Route path="/essential-model" element={<EssentialModel />} />
              <Route path="/essential-model/ambiental" element={<AmbientalModel />} />
              <Route path="/essential-model/ambiental/dp" element={<DP />} />
              <Route path="/essential-model/ambiental/dc" element={<DC />} />
              <Route path="/essential-model/ambiental/la" element={<LA />} />
              <Route path="/essential-model/behavior" element={<BehaviorModel />} />
              <Route path="/ae" element={<AE />} />
              <Route path="/ae/mcun" element={<Mcun />} />
              <Route path="/ae/mcus" element={<Mcus />} />
              <Route path="/ae/cune" element={<Cune />} />
              <Route path="/object-oriented" element={<ObjectOriented />} />
              <Route path="/v" element={<V />} />
              <Route path="/c" element={<C />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;