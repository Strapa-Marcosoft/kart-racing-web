import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

interface Season {
    title: string
}

const ListSeason = () => {
    const [seasonList, setSeasonList] = useState<Season[]>([]);

    useEffect(() => {
        getSeasonList();
    }, []);

    const getSeasonList = () => {
        kartRacingApi.get("/seasonEntities")
            .then(res => {
                setSeasonList(res.data._embedded.seasonEntities);
            });
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <div id="pageTitle">Season List</div>
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
        </div>
    );
}

export default ListSeason;