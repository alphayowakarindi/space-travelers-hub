
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Dragons from './pages/Dragons';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Rockets />} />
        <Route path='Missions' element={<Missions />} />
        <Route path='Dragons' element={<Dragons />} />
        <Route path='MyProfile' element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
