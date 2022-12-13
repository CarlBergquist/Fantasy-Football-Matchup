import Init from './pages/initial'
import Main from './pages/main';
import Account from './pages/account';
import Matchup from './pages/matchup';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/main' element={<Main />} />  
        <Route path='/account' element={<Account />} />  
        <Route path='/matchup' element={<Matchup />} />  
      </Routes>

      </>
    </Router>
  );
}

export default App;