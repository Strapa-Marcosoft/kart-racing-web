import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

class ListLocation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            locationList : ""
        }
        this.getLocationList();
    }

    getLocationList(){
        kartRacingApi.get('/locationEntities')
            .then(res => {
                let locationList = res.data._embedded.locationEntities
                this.setState({locationList : locationList.map((d) =>
                        <tr key={d.title}>
                            <td>{d.title}</td>
                        </tr>)});
            } )
    }


    render() {
        return (
            <div>
                <AdmHeader/>
                <h4>Location List</h4>
                <button className="btn btn-light"><Link to="/location/new">Add Location</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.locationList}</tbody>
                </table>
            </div>
        )
    }
}

export default ListLocation;