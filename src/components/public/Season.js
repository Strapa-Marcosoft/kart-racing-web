import Round from "./Round";
import './public.css'
function Season(){
    return(
        <div className="season">
            <table width="90%" align="center" className="seasonTable">
                <tbody>
                <tr>
                    <td colSpan="3" className="seasonTitle">Kart Racing - Season 2022</td>
                </tr>
                    <tr>
                        <td>
                            <Round locationName="Interlagos" locationId="1" roundDate="24.10.2022"/>
                        </td>
                        <td>
                            <Round locationName="Imola" locationId="2"  roundDate="22.01.2022"/>
                        </td>
                        <td>
                            <Round locationName="EUA" locationId="3"  roundDate="10.06.2022"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Round locationName="Malasya Race" locationId="4"  roundDate="13.08.2022"/>
                        </td>
                        <td>
                            <Round locationName="Interlagos" locationId="6" roundDate="30.07.2022"/>
                        </td>
                        <td>
                            <Round locationName="Interlagos" locationId="7" roundDate="09.03.2022"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Season;