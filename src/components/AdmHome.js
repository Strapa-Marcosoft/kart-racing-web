import "../Default.css"
import {Component} from "react";
import {Link} from "react-router-dom";

class AdmHome extends Component{
    render() {
        return (
            <div>
                <div className="title">This is the ADM Home for the Kart Racing Web</div>
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