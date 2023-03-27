import {Link} from "react-router-dom";
import './ListButtons.css'

export const ListButtons = () => {
    return(
        <div id="buttons">
            <div className="container">
                <Link to="/season/new"><button className="btn btn-outline-primary">Add Season</button></Link>
            </div>
            <div className="container">
                <Link to="/"><button className="btn btn-outline-secondary">Back</button></Link>
            </div>
        </div>
    )
}
