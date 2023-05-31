import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner'
import RowList from './Components/RowList/RowList';
import { topRated,upComing } from './MovieLinks';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Banner/>
      <RowList title='Top Rated' url={topRated} />
      <RowList title='Upcoming' url={upComing}  isSmall/>
    </div>
  );
}

export default App;
