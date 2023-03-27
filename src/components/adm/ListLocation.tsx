import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";

interface Location {
    title: string
}

const ListLocation = () => {
    const [locationList, setLocationList] = useState<Location[]>([]);
    useEffect(() => {
        getLocationList();
    }, []);

    const getLocationList = () => {
        kartRacingApi.get('/locationEntities')
            .then(res => {
                setLocationList(res.data._embedded.locationEntities);
            })
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <div id="pageTitle">Location List</div>
                <button className="btn btn-light"><Link to="/location/new">Add Location</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                    </tr>
                    </thead>
                    <tbody>{
                        locationList.map((d) =>
                            <tr key={d.title}>
                                <td>{d.title}</td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ListLocation;