import {Link} from "react-router-dom";
import './OperationFeedback.css'
import React from "react";

interface OperationFeedbackProps{
    okButtonLink: string
}
export const OperationFeedback:React.FC<OperationFeedbackProps> = ({okButtonLink}) => {
    return(
            <div id="operationFeedback">
                <div>
                    Operation Succeed!
                </div>
                <Link to={okButtonLink}>
                    <button type="button" className="btn btn-outline-success">OK</button>
                </Link>
            </div>
    )
}