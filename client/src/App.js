import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Init from './pages/initial'
import Main from './pages/main';
import Account from './pages/account';
import Login from './pages/login';
import Matchup from './pages/matchup';
import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/login' element={<Login />} />
        <Route path='/main' element={<Main />} />  
        <Route path='/account' element={<Account />} />  
        <Route path='/matchup' element={<Matchup />} />  
      </Routes>

      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
