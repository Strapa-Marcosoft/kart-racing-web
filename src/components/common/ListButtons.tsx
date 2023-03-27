import {Link} from "react-router-dom";
import './ListButtons.css'
import React from "react";

interface ListButtonsProps{
    objectTitle: string
    addButtonLink: string
}

export const ListButtons:React.FC<ListButtonsProps> = ({objectTitle,addButtonLink}) => {
    return(
        <div id="buttons">
            <div className="container">
                <Link to={addButtonLink}><button className="btn btn-outline-primary">Add {objectTitle}</button></Link>
            </div>
            <div className="container">
                <Link to="/"><button className="btn btn-outline-secondary">Back</button></Link>
            </div>
        </div>
    )
}
