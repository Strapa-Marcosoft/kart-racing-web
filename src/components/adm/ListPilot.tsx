import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";
import './List.css'
import {ListButtons} from "../common/ListButtons";

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
            <div id="list">
                <div className="title">Pilot List</div>
                <ListButtons objectTitle={"Pilot"} addButtonLink={"/pilot/new"}/>
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