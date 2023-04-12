import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "../common/AdmHeader";
import {Card} from "../common/Card";

const AdmHome = () => {
    return (
        <div id="body">
            <AdmHeader/>
                <div id={"initPageTitle"}>Select the desired operation</div>
                <div>
                    <div id="main" className="row py-5 row-cols-1 row-cols-lg-2" style={{backgroundColor: "white"}}>
                        <Card title={"Season"} description={"Allows you to manage the seasons"} link={"/admin/season"}/>
                        <Card title={"Locations"} description={"Allows you to locations where rounds will take place"} link={"/admin/location"}/>
                    </div>
                    <div id="main" className="row py-5 row-cols-1 row-cols-lg-2" style={{backgroundColor: "white"}}>
                        <Card title={"Rounds"} description={"Allows you to manage the rounds of for a specific season"} link={"/admin/round"}/>
                        <Card title={"Pilots"} description={"Allows you to manage the pilots that will participate of rounds"} link={"/admin/pilot"}/>
                    </div>
                </div>

        </div>
    );
}

export default AdmHome;