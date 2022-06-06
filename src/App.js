import React from 'react';
import TitleBar from './components/TitleBar';
import BodySection from './components/BodySection';
import SideBar from './components/SideBar';
import PieChart from './components/PieChart';
import { useState } from 'react';
import { UserData } from './Data';
import axios, { Axios } from 'axios';
import { useEffect } from 'react';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userLost),
        backgroundColor: ['green', 'blue', 'orange', 'red', 'yellow'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className='ui one column stackable grid'>
      <div className='ui two column grid'>
        <div className='three wide column'>
          <SideBar />
        </div>
        <div className='thirteen wide column'>
          <TitleBar />
          <div className='thirteen wide column'>
            <BodySection />
            <br />
            <div style={{ width: 220 }}>
              <PieChart chartData={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
