import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";

class AdmHome extends Component{
    render() {
        return (
            <div>
                <AdmHeader/>
                <br/><br/>
                <ul>
                    <li>Seasons</li>
                    <li><Link to="/location">Location</Link></li>
                    <li>Rounds</li>
                    <li><Link to="/pilot">Pilot</Link></li>
                </ul>
            </div>
        );
    }
}

export default AdmHome;