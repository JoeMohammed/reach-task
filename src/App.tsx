import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/layout';
const SearchScreen = React.lazy(() => import('screens/search/screen'));
const HomeScreen = React.lazy(() => import('screens/home/screen'));

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/search" element={<SearchScreen />} />
        </Routes>
      </Layout>
  );
}

export default App;
