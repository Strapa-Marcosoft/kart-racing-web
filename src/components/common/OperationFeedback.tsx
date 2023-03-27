import {Link} from "react-router-dom";
import './OperationFeedback.css'

export const OperationFeedback = () => {
    return(
            <div id="operationFeedback">
                <div>
                    Operation Succeed!
                </div>
                <Link to="/season">
                    <button type="button" className="btn btn-outline-success">OK</button>
                </Link>
            </div>
    )
}