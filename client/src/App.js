import Init from './pages/initial'
import Main from './pages/main';
import Account from './pages/account';
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
      </Routes>

      </>
    </Router>
  );
}

export default App;
