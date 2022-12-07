import {useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

function FormRound () {
    const [season, setSeason] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    function addNewRound(){
        kartRacingApi.post('/roundEntities',{
            season,
            location,
            date
        })
    }

    return (
        <div>
            <AdmHeader/>
            <h4>Add Round</h4>
            <table>
                <tbody>
                <tr>
                    <td>Season:</td>
                    <td><input type="text" name="title" value={season} onChange={event => setSeason(event.target.value)}/></td>
                </tr>
                <tr>
                    <td>Location:</td>
                    <td><input type="text" name="title" value={location} onChange={event => setLocation(event.target.value)}/></td>
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