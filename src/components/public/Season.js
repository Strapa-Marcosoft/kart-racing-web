import Round from "./Round";
import './public.css'
import {useEffect, useState} from "react";
import kartRacingApi from "../adm/AxiosConfig";
import {useParams} from "react-router-dom";
function Season(){
    const [seasonRoundList, setSeasonRoundList] = useState([])
    const [seasonTitle, setSeasonTitle] = useState(null);
    let { seasonId } = useParams();

    useEffect(() => {
        getSeasonTitle();
        getRoundList();
    }, []);

    function getSeasonTitle(){
        kartRacingApi.get('/seasonEntities/' + seasonId)
            .then(res => {
                setSeasonTitle(res.data.title);
            })
    }
    function getRoundList() {
        var seasonRoundListAux = [];
        var roundList = [];

        kartRacingApi.get('/roundEntities')
            .then(res => {
                roundList = res.data._embedded.roundEntities
                roundList.map((r) => {
                        if (r.season == seasonId) seasonRoundListAux.push(r)
                    }
                )
                setSeasonRoundList(seasonRoundListAux)
            });
    }

    function renderRound(roundId, index){
        console.log("index is: " +index)
            return <tr key={index}><td><Round roundId={roundId} /></td></tr>
    }

    return(
        <div className="season">
            <table width="90%" align="center" className="seasonTable">
                <tbody>
                <tr>
                    <td colSpan="3" className="seasonTitle">Kart Racing - Season {seasonTitle}</td>
                </tr>
                {seasonRoundList.map((r,i) => renderRound(r,i))}
                </tbody>
            </table>
        </div>
    )
}

export default Season;