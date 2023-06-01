import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner'
import RowList from './Components/RowList/RowList';
import { topRated,upComing,popular } from './MovieLinks';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Banner/>
      <RowList title='Popular' url={popular}/>
      <RowList title='Top Rated' url={topRated} isMedium/>
      <RowList title='Upcoming' url={upComing} isMedium  isSmall/>
    </React.Fragment>
  );
}

export default App;
