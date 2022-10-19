import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";

class ListPilot extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pilotList : "",
            getData : 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.getPilotList = this.getPilotList.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    async getPilotList(){
        const response = await  fetch('http://localhost:8080/pilotEntities', {
            "method": "GET"
        });
        const data = await response.json();
        let pilotList = data._embedded.pilotEntities;
        this.setState({pilotList : pilotList.map((d) => <tr key={d.alias}><td>{d.fullName}</td><td>{d.alias}</td></tr>)});
        this.setState({getData : 0});
    }

    render() {
        if(this.state.getData) this.getPilotList()
        return (
            <div>
                <AdmHeader/>
                <h4>Pilot List</h4>
                <button className="btn btn-light"><Link to="/pilot/new">Add Pilot</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Alias</th>
                    </tr>
                    </thead>
                    <tbody>{this.state.pilotList}</tbody>
                </table>
            </div>
        );
    }
}

export default ListPilot;