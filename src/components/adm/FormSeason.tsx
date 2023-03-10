import {useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

const FormSeason = () => {
    const [title, setTitle] = useState('');

    const addNewSeason = () => {
        kartRacingApi.post('/seasonEntities', {
            title
        })
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <div id="pageTitle">Add Season</div>
                <table>
                    <tbody>
                    <tr>
                        <td>Title:</td>
                        <td><input type="text" name="title" value={title}
                                   onChange={event => setTitle(event.target.value)}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button className="btn btn-light" onClick={addNewSeason}>Save</button>
                        </td>
                        <td>
                            <button className="btn btn-light"><Link to="/season">Cancel</Link></button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FormSeason