import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

function ListSeason() {
    const [seasonList, setSeasonList] = useState([]);

    useEffect(() => {
        getSeasonList();
    }, []);

    function getSeasonList() {
        kartRacingApi.get("/seasonEntities")
            .then(res => {
                setSeasonList(res.data._embedded.seasonEntities);
            });
    }

    return (
        <div>
            <AdmHeader/>
            <h4>Season List</h4>
            <button className="btn btn-light"><Link to="/season/new">Add Season</Link></button>
            <button className="btn btn-light"><Link to="/">Back</Link></button>
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>{seasonList.map((d) =>
                    <tr key={d.title}>
                        <td>{d.title}</td>
                    </tr>)}</tbody>
            </table>
        </div>
    );
}

export default ListSeason;