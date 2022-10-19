import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";


class ListLocation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            locationList : "",
            getData : 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.getLocationList = this.getLocationList.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    async getLocationList(){
        const response = await  fetch('http://localhost:8080/locationEntities', {
            "method": "GET"
        });
        const data = await response.json();
        let locationList = data._embedded.locationEntities;
        this.setState({locationList : locationList.map((d) => <tr key={d.title}><td>{d.title}</td></tr>)});
        this.setState({getData : 0});
    }


    render() {
        if(this.state.getData) this.getLocationList();
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