import './App.css';
import AdmHome from "./components/AdmHome";
import {Route, Routes } from 'react-router-dom';
import ListLocation from "./components/ListLocation";
import FormLocation from "./components/FormLocation";
import ListPilot from "./components/ListPilot";
import FormPilot from "./components/FormPilot";
import ListSeason from "./components/ListSeasson";
import FormSeason from "./components/FormSeason"
import ListRound from "./components/ListRound";
//import FormRound from "./components/FormRound";

function App() {
  return (
      <div className="w-75 border" >

        <main>
            <Routes>
                <Route path="/" element={<AdmHome/>} exact/>
                <Route path="/location" element={<ListLocation/>} exact/>
                <Route path="/location/new" element={<FormLocation/>} exact/>
                <Route path="/pilot" element={<ListPilot/>} exact/>
                <Route path="/pilot/new" element={<FormPilot/>} exact/>
                <Route path="/season" element={<ListSeason/>} exact/>
                <Route path="/season/new" element={<FormSeason/>} exact/>
                <Route path="/round" element={<ListRound/>} exact/>
            </Routes>
        </main>
      </div>
  );
}

export default App;
