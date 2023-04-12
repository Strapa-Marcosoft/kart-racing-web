import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "../common/AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";
import './List.css'
import {ListButtons} from "../common/ListButtons";

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
            <div id="list">
                <div className="title">Location List</div>
                <ListButtons objectTitle={"Location"} addButtonLink={"/admin/location/new"} />
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