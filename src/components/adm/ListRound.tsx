import {useEffect, useState} from "react";
import kartRacingApi from "../../config/AxiosConfig";
import AdmHeader from "../common/AdmHeader";
import {Link} from "react-router-dom";
import './List.css'
import {ListButtons} from "../common/ListButtons";
interface Round {
    id: number
    date: string
    seasonTitle: string
    locationTitle: string
}

interface RoundOriginal {
    season: number
    location: number
}

const ListRound = () => {
    const [roundList, setRoundList] = useState<Round[]>([]);

    useEffect(() => {
        getRoundList();
    }, []);

    const convertDate = (originalDate: string) => {
        let convertedDate = originalDate.split('-')
        return convertedDate[2] + "/" + convertedDate[1] + "/" + convertedDate[0];
    }

    const getRoundList = () => {
        kartRacingApi.get("/roundEntities")
            .then(async res => {

                let roundList = Promise.all(res.data._embedded.roundEntities.map(async (round: RoundOriginal) => {

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

    return (
        <div id="body">
            <AdmHeader/>
            <div id="list">
                <div className="title">Round List</div>
                <ListButtons objectTitle={"Round"} addButtonLink={"/round/new"}/>
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
                            <td><Link to={"/round/" + d.id}>{convertDate(d.date)}</Link></td>
                            <td>{d.seasonTitle}</td>
                            <td>{d.locationTitle}</td>

                        </tr>)}</tbody>
                </table>
            </div>
        </div>
    )

}

export default ListRound;