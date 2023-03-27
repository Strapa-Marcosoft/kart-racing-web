import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import {Card} from "../common/Card";

const AdmHome = () => {
    return (
        <div id="body">
            <AdmHeader/>
            <div id="main" className="row  py-5 row-cols-1 row-cols-lg-4">
                <Card title={"Season"} description={"Allows you to manage the seasons"} link={"/season"}/>
                <Card title={"Locations"} description={"Allows you to locations where rounds will take place"} link={"/location"}/>
                <Card title={"Rounds"} description={"Allows you to manage the rounds of for a specific season"} link={"/round"}/>
                <Card title={"Pilots"} description={"Allows you to manage the pilots that will participate of rounds"} link={"/pilot"}/>
            </div>
        </div>
    );
}

export default AdmHome;