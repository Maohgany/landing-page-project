import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeaturesPage from './pages/FeaturesPage';
import HomePage from './pages/HomePage';
import SigninPage from './pages/SigninPage';
import TeamPage from './pages/TeamPage';



const App = () => {

  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="features" element={<FeaturesPage/>}></Route>
  <Route path ="signin" element={<SigninPage/>}></Route>
  <Route path="team" element={<TeamPage/>}></Route>
</Routes>
</BrowserRouter>
    </div>
  );
};

export default App