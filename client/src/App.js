import Init from './pages/initial'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={<Init />} />
      </Routes>
      </>
    </Router>
  );
}

export default App;
