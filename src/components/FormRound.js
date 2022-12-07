import {useEffect,useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

function FormRound () {
    const [season, setSeason] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [seasonList, setSeasonList] = useState([]);
    const [locationList, setLocationList] = useState([]);


    function addNewRound(){
        console.log(season);
        console.log(date);
        kartRacingApi.post('/roundEntities',{
            season,
            location,
            date
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
        <div>
            <AdmHeader/>
            <h4>Add Round</h4>
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
                    <td><input type="text" name="title" value={date} onChange={event => setDate(event.target.value)}/></td>
                </tr>
                <tr>
                    <td><button className="btn btn-light" onClick={addNewRound}>Save</button></td>
                    <td><button className="btn btn-light"><Link to="/round">Cancel</Link></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormRound