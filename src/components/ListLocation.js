import "../Default.css"
import {Component} from "react";
import {Link} from "react-router-dom";

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
        this.setState({locationList : data.map((d) => <tr key={d.id}><td>{d.id}</td><td>{d.title}</td></tr>)});
    }

    render() {
        this.getLocationList()
        return (
            <div>
                <div className="title">Location List</div>
                <button><Link to="/location/new">Add Location</Link></button>
                <button><Link to="/">Back</Link></button>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                    {this.state.locationList}
                </table>
            </div>
        )
    }
}

export default ListLocation;