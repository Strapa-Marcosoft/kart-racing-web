import './App.css';
import AdmHome from "./components/AdmHome";
import {Route, Routes } from 'react-router-dom';
import ListLocation from "./components/ListLocation";
import FormLocation from "./components/FormLocation";
import ListPilot from "./components/ListPilot";
import FormPilot from "./components/FormPilot";

function App() {
  return (
      <div class="w-75 border" >
        <main>
            <Routes>
                <Route path="/" element={<AdmHome/>} exact/>
                <Route path="/location" element={<ListLocation/>} exact/>
                <Route path="/location/new" element={<FormLocation/>} exact/>
                <Route path="/pilot" element={<ListPilot/>} exact/>
                <Route path="/pilot/new" element={<FormPilot/>} exact/>
            </Routes>
        </main>
      </div>
  );
}

export default App;
