import Winners from "./Winners";
import {useState} from "react";

function Round({locationName,locationId, roundDate }){

    //const [locationName, setLocationName] = useState([])
    //const [roundDate, setRoundDate] = useState([])

    return(
        <div className="round">
            <table width="100%">
                <tbody>
                    <tr>
                        <td className="locationName">
                            Circuito {locationName}
                        </td>
                    </tr>
                    <tr>
                        <td className="locationId">
                            {roundDate}
                        </td>
                    </tr>
                    <tr>
                        <td className="locationImage">
                            <img src={require('../../img/location/' + locationId + '.png')} alt="this is the location" width="250" height="200" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Winners />
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