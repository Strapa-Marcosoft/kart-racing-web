import './public.css'
import React, {useEffect, useState} from "react";
import kartRacingApi from "../adm/AxiosConfig";


interface Round {
    roundId: number
}

const Winners:React.FC<Round> = ({roundId})=> {


    const getRoundDetails = () => {
        kartRacingApi.get('/roundEntities/'+roundId)
            .then(res => {

            })
    }

    return(
        <div>
            <table width="80%" align="center">
                <tbody>
                <tr>
                    <td colSpan={3}  className="winnersTitle">Vencedores</td>
                </tr>
                <tr>
                    <td className="placeNumber">1º</td>
                    <td className="placeNumber">2º</td>
                    <td className="placeNumber">3º</td>
                </tr>
                <tr>
                    <td align="center" valign="top"><img src={require('../../img/pilot/10.jpg')} alt="this is a pilot" width="150" height="150"  className="firstPlace"/></td>
                    <td align="center" valign="top"><img src={require('../../img/pilot/12.jpg')} alt="this is a pilot" width="120" height="120"  className="secondPlace"/></td>
                    <td align="center" valign="top"><img src={require('../../img/pilot/7.jpg')} alt="this is a pilot" width="90" height="90" className="thirdPlace"/></td>
                </tr>
                <tr>
                    <td className="winnersName">M. Schum</td>
                    <td className="winnersName">L. Hamilton</td>
                    <td className="winnersName">A. Prost</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Winners;