import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

function FormRoundDetail () {
    const [pilotList, setPilotList] = useState([])
    let { id } = useParams();

    useEffect(() => {
        getPilotList();
    }, []);

    function getPilotList() {
        console.log(id);
        //TODO Change api to search roundPilots by round
        kartRacingApi.get('/roundPilotEntities/'+id)
            .then(res => {
                const data = res.data._embedded.pilotEntities;
                setPilotList(data)
            })
    }

    return (
        <div>
            <AdmHeader/>
            <h4>Round Detail</h4>
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
    );
}

export default FormRoundDetail;