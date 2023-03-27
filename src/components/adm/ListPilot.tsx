import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

interface Pilot {
    alias: string
    fullName: string
}

const ListPilot = () => {
    const [pilotList, setPilotList] = useState<Pilot[]>([])

    useEffect(() => {
        getPilotList();
    }, []);

    const getPilotList = () => {
        kartRacingApi.get('/pilotEntities')
            .then(res => {
                const data = res.data._embedded.pilotEntities;
                setPilotList(data)
            })
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <div id="pageTitle">Pilot List</div>
                <button className="btn btn-light"><Link to="/pilot/new">Add Pilot</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Alias</th>
                    </tr>
                    </thead>
                    <tbody>{
                        pilotList.map((d) =>
                            <tr key={d.alias}>
                                <td>{d.fullName}</td>
                                <td>{d.alias}</td>
                            </tr>)
                    }</tbody>
                </table>
            </div>
        </div>
    );
}

export default ListPilot;