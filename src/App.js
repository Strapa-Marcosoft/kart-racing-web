import './App.css';
import AdmHome from "./components/adm/AdmHome";
import {Route, Routes } from 'react-router-dom';
import ListLocation from "./components/adm/ListLocation";
import FormLocation from "./components/adm/FormLocation";
import ListPilot from "./components/adm/ListPilot";
import FormPilot from "./components/adm/FormPilot";
import ListSeason from "./components/adm/ListSeasson";
import FormSeason from "./components/adm/FormSeason"
import ListRound from "./components/adm/ListRound";
import FormRound from "./components/adm/FormRound";
import FormRoundDetail from "./components/adm/FormRoundDetail";
import Season from "./components/public/Season";

function App() {
  return (
      <div>
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
                <Route path="/round/new" element={<FormRound/>} exact/>
                <Route path="/round/:id" element={<FormRoundDetail/>} exact/>

                <Route path="/public/season" element={<Season />} exact />
            </Routes>
        </main>
      </div>
  );
}

export default App;
