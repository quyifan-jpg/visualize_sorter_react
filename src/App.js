import React from 'react';

import SortingVisalizer from './SortingVisualizer/SortingVisualizer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MergeSort from './component/mergePage';
import QuickSort from './component/QuickSort';
import SelectionSort from './component/SelectionSort';
import BubbleSort from './component/BubblePage';
import Navbar from './component/sidebar';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<SortingVisalizer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
