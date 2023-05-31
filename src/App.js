import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import RowList from './Components/RowList/RowList';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Banner/>
      <RowList title='Top Rated'/>
    </div>
  );
}

export default App;
