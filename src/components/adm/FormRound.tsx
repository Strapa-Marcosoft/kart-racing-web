import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

interface Season {
    id: number
    title: string
}

interface Location {
    id: number
    title: string
}

interface RoundPilot {
    id: number
}

const FormRound = () => {
    const [season, setSeason] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [seasonList, setSeasonList] = useState<Season[]>([]);
    const [locationList, setLocationList] = useState<Location[]>([]);

    const addNewRound = () => {
        console.log(season);
        console.log(date);
        const data = {
            season,
            location,
            date
        };
        kartRacingApi.post('/roundEntities', data)
            .then(roundResponse => {
                const roundId = roundResponse.data.id;
                kartRacingApi.get("/pilotEntities")
                    .then(pilotResponse => {
                        pilotResponse.data._embedded.pilotEntities.map((pilot: RoundPilot) => {
                            const roundPilotData = {
                                round: roundId,
                                pilot: pilot.id
                            }
                            kartRacingApi.post("/roundPilotEntities", roundPilotData);
                        })
                    })
            })
            .catch(error => {
                alert(error);
            })
    }

    useEffect(() => {
        getSeasonList();
        getLocationList();
    }, []);

    function getSeasonList() {
        kartRacingApi.get("/seasonEntities")
            .then(res => {
                setSeasonList(res.data._embedded.seasonEntities);
            });
    }

    function getLocationList() {
        kartRacingApi.get("/locationEntities")
            .then(res => {
                setLocationList(res.data._embedded.locationEntities);
            });
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <div id="pageTitle">Add Round</div>
                <table>
                    <tbody>
                    <tr>
                        <td>Season:</td>
                        <td>
                            <select value={season} onChange={event => setSeason(event.target.value)} required>
                                <option value="">Please choose an option</option>
                                {
                                    seasonList.map((d) =>
                                        <option key={d.id} value={d.id}>{d.title}</option>
                                    )
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Location:</td>
                        <td>
                            <select value={location} onChange={event => setLocation(event.target.value)}>
                                <option value="">Please choose an option</option>
                                {
                                    locationList.map((d) =>
                                        <option key={d.id} value={d.id}>{d.title}</option>
                                    )
                                }
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td><input type="text" name="title" value={date}
                                   onChange={event => setDate(event.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn btn-light" onClick={addNewRound}>Save</button>
                        </td>
                        <td>
                            <button className="btn btn-light"><Link to="/round">Cancel</Link></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FormRound