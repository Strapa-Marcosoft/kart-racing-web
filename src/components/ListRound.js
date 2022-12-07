import {useEffect, useState} from "react";
import kartRacingApi from "./AxiosConfig";
import AdmHeader from "./AdmHeader";
import {Link} from "react-router-dom";

function ListRound(){
    const [roundList, setRoundList] = useState([]);

    useEffect(() => {
        getRoundList();
    }, []);

    function getRoundList(){
        kartRacingApi.get("/roundEntities")
            .then( res => {
                setRoundList(res.data._embedded.roundEntities);
            });
    }

    
        return(
            <div>
                <AdmHeader/>
                <h4>Round List</h4>
                <button className="btn btn-light"><Link to="/round/new">Add Round</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Season</th>
                        <th>Location</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>{roundList.map((d) =>
                        <tr key={d.id}>
                            <td>{d.season}</td>
                            <td>{d.location}</td>
                            <td>{d.date}</td>
                        </tr> )}</tbody>
                </table>
            </div>
        )
    
}

export default ListRound;