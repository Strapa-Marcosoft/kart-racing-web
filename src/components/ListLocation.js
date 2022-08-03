import "../Default.css"
import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


class ListLocation extends Component{

    constructor(props) {
        super(props);
        this.state = {
            locationList : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.getLocationList = this.getLocationList.bind(this)
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
        this.setState({locationList : locationList.map((d) => <div className="row" key={d.title}><div className="col-sm">{d.title}</div></div>)});
    }

    render() {
        this.getLocationList()
        return (
            <div>
                <div className="title">Location List</div>
                <button><Link to="/location/new">Add Location</Link></button>
                <button><Link to="/">Back</Link></button>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            Title
                        </div>
                    </div>
                        {this.state.locationList}
                </div>
            </div>
        )
    }
}

export default ListLocation;