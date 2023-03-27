import React from "react";

interface CardProps{
    title: string
    description: string
    link: string
}

export const Card:React.FC<CardProps> = ({title,description,link}) => {
    return(
        <div>
            <div className="col d-flex align-items-start">
                <div
                    className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    <svg className="bi" width="1em" height="1em" />
                </div>
                <div>
                    <h3 className="fs-2"><span className="componentName">{title}</span></h3>
                    <p>{description}</p>
                    <a href={link} className="btn btn-outline-primary">
                        See Details
                    </a>
                </div>
            </div>
        </div>
    )
}