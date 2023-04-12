import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "../common/AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

interface RoundPilot {
    id: number
    pilotName: string
    finalPosition: number
    bestLap: string
    polePosition: string
    score: number
}

interface Pilot {
    pilot: number
}

const FormRoundDetail = () => {
    const [roundPilotList, setPilotList] = useState<RoundPilot[]>([])
    let {id} = useParams();

    useEffect(() => {
        getPilotList();
    }, []);

    const getPilotList = () => {
        console.log(id);
        kartRacingApi.get('/roundPilotEntities/search/getAllByRound?round=' + id)
            .then(async res => {
                let roundPilotList = Promise.all(res.data._embedded.roundPilotEntities.map(async (roundPilot: Pilot) => {
                    let pilotName = await kartRacingApi.get("/pilotEntities/" + roundPilot.pilot)
                        .then(res => res.data.fullName);

                    return {
                        ...roundPilot,
                        pilotName
                    };
                }));

                setPilotList(await roundPilotList)
            })
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <div id="pageTitle">Round Detail</div>
                <button className="btn btn-light"><Link to="/pilot/new">Add Pilot</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Pilot Name</th>
                        <th>Final Position</th>
                        <th>Best Lap</th>
                        <th>Pole Position</th>
                        <th>Score</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>{
                        roundPilotList.map((d) =>
                            <tr key={d.id}>
                                <td>{d.pilotName}</td>
                                <td>{d.finalPosition}</td>
                                <td>{d.bestLap}</td>
                                <td>{d.polePosition}</td>
                                <td>{d.score}</td>
                                <td><a href="src/components">X</a></td>
                            </tr>)
                    }</tbody>
                </table>
            </div>
        </div>
    );
}

export default FormRoundDetail;