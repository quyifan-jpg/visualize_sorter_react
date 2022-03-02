import React from 'react';

import SortingVisalizer from './SortingVisualizer/SortingVisualizer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MergeSort from './component/mergePage';
import QuickSort from './component/QuickSort';
import SelectionSort from './component/SelectionSort';
import BubbleSort from './component/BubblePage';
import Navbar from './component/sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<SortingVisalizer/>} />          
          <Route path='/BubbleSort' exact element={<BubbleSort/>} />
          <Route path='/QuickSort' exact element={<QuickSort/>} />
          <Route path='/SelectSort' exact element={<SelectionSort/>} />
          <Route path='/MergeSort' exact element={<MergeSort/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
