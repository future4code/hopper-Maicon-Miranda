import React from "react";

import Main from "./components/Main/Main";
import ParticipationTable from "./components/ParticipationTable/ParticipationTable";
import ParticipationChart from "./components/ParticipationChart/ParticipationChart";
import './index.css'
import Header from "./components/Header/Header";



function App() {
  return (
    <>
      <Header/>
      <Main />
      <ParticipationTable />
      <ParticipationChart />
    </>
      
  )
}

export default App;
