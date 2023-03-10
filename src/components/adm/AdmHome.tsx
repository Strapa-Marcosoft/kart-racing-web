import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";

const AdmHome = () => {
    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <ul>
                    <li><Link to="/season">Seasons</Link></li>
                    <li><Link to="/location">Locations</Link></li>
                    <li><Link to="/round">Rounds</Link></li>
                    <li><Link to="/pilot">Pilots</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default AdmHome;