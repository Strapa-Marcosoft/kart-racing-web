import {Link} from "react-router-dom";
import React from "react";
import './FormButtons.css'

export const FormButtons = () => {
    return(
        <div id="buttons">
            <div style={{textAlign:'right'}} className="container">
                <button className="btn btn-outline-primary" type="submit">Save</button>
            </div>
            <div className="container">
                <Link to="/season">
                    <button className="btn btn-outline-secondary">Cancel</button>
                </Link>
            </div>
        </div>
    )
}