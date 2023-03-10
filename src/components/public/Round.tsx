import Winners from "./Winners";
import React, {useEffect, useState} from "react";
import kartRacingApi from "../adm/AxiosConfig";


interface Round {
    roundId: number
}

interface RoundSearch {
    location: number
}

const Round:React.FC<Round> = ({roundId}) =>{

    const [locationName, setLocationName] = useState('')
    const [locationId, setLocationId] = useState("0")
    const [roundDate, setRoundDate] = useState(null)

    useEffect(() => {
        getRoundDetails();
    }, []);

    const getRoundDetails = () => {

/*        kartRacingApi.get('/roundEntities/'+properties)
            .then(res => {
                setLocationId(res.data.location);
                setRoundDate(res.data.date);
            })*/

       kartRacingApi.get('/roundEntities/'+roundId)
            .then(async res => {
                setLocationId(res.data.location);
                setRoundDate(res.data.date);


                setLocationName("Test")
            })
    }


    return(
        <div className="round">
            <table width="100%">
                <tbody>
                    <tr>
                        <td className="locationName">
                            Circuito {locationName} Teste
                        </td>
                        <td className="locationId">
                            {roundDate}
                        </td>
                    </tr>
                    <tr>
                        <td className="locationImage" colSpan={2}>
                            <img src={require('../../img/location/' + locationId + '.png')} alt="this is the location" width="250" height="200" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Winners roundId={9}/>
                        </td>
                    </tr>
                <tr>
                    <td>&nbsp;</td>
                </tr>
                    <tr>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Round;