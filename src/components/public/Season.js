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

    function renderRound(round, index){
        console.log("index is: " +index)
            return <Round roundId={round.id} />
    }

    return(
        <div className="season">

            <div className="seasonTitle">Kart Racing - Season {seasonTitle}</div>
            <div className="roundContainer">
                {seasonRoundList.map((r,i) => renderRound(r,i))}
            </div>
        </div>
    )
}

export default Season;