import {useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

const FormSeason = () => {
    const [title, setTitle] = useState('');

    const addNewSeason = () => {
        kartRacingApi.post('/seasonEntities',{
            title
        })
    }

    return (
        <div>
            <AdmHeader/>
            <h4>Add Pilot</h4>
            <table>
                <tbody>
                <tr>
                    <td>Title:</td>
                    <td><input type="text" name="title" value={title} onChange={event => setTitle(event.target.value)}/></td>
                </tr>
                <tr>
                    <td><button className="btn btn-light" onClick={addNewSeason}>Save</button></td>
                    <td><button className="btn btn-light"><Link to="/season">Cancel</Link></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FormSeason