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
                            <Round roundId="2"/>
                        </td>
                        <td>
                            <Round roundId="4"/>
                        </td>
                        <td>
                            <Round roundId="9"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Round roundId="10"/>
                        </td>
                        <td>
                            <Round roundId="11"/>
                        </td>
                        <td>
                            <Round roundId="12"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Season;