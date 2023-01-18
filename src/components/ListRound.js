import {useEffect, useState} from "react";
import kartRacingApi from "./AxiosConfig";
import AdmHeader from "./AdmHeader";
import {Link} from "react-router-dom";

function ListRound(){
    const [roundList, setRoundList] = useState([]);

    useEffect(() => {
        getRoundList();
    }, []);

    function convertDate(originalDate){
        let convertedDate = originalDate.split('-')
        return convertedDate[2] + "/" + convertedDate[1] + "/" + convertedDate[0];
    }

    function getRoundList(){
        kartRacingApi.get("/roundEntities")
            .then(async res => {

                 let roundList = Promise.all(res.data._embedded.roundEntities.map(async round => {

                    let seasonTitle = await kartRacingApi.get("/seasonEntities/" + round.season)
                                            .then(res => {
                                                return res.data.title;
                                            })

                    let locationTitle = await kartRacingApi.get("/locationEntities/" + round.location)
                         .then(res => {
                             return res.data.title;
                         })

                    return {
                        ...round,
                        seasonTitle,
                        locationTitle
                    }
                }));

                setRoundList(await roundList);
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
                            <td><Link to={"/round/"+d.id}>{convertDate(d.date)}</Link></td>
                            <td>{d.seasonTitle}</td>
                            <td>{d.locationTitle}</td>

                        </tr> )}</tbody>
                </table>
            </div>
        )
    
}

export default ListRound;