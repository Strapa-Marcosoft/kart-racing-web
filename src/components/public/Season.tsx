import RoundComponent from "./Round";
import './public.css'
import {useEffect, useState} from "react";
import kartRacingApi from "../../config/AxiosConfig";
import {useParams} from "react-router-dom";

interface Round{
    id:number
    season: string
}

const Season = () =>{
    const [seasonRoundList, setSeasonRoundList] = useState<Round[]>([])
    const [seasonTitle, setSeasonTitle] = useState(null);
    let { seasonId } = useParams();

    useEffect(() => {
        getSeasonTitle();
        getRoundList();
    }, []);

    const getSeasonTitle = () => {
        kartRacingApi.get('/seasonEntities/' + seasonId)
            .then(res => {
                setSeasonTitle(res.data.title);
            })
    }
    const getRoundList = () => {
        var seasonRoundListAux: Round[];
        var roundList = [];

        kartRacingApi.get('/roundEntities')
            .then(res => {
                roundList = res.data._embedded.roundEntities
                roundList.map((r:Round) => {
                        if (r.season == seasonId) seasonRoundListAux.push(r)
                    }
                )
                setSeasonRoundList(seasonRoundListAux)
            });
    }

    const renderRound = (round:Round, index:number) => {
        console.log("index is: " +index)
            return <RoundComponent roundId={round.id} />
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