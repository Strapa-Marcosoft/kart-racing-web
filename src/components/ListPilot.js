import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

class ListPilot extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pilotList : ""
        }
        this.getPilotList()
    }


    getPilotList(){
        kartRacingApi.get('/pilotEntities')
            .then(res => {
                let pilotList = res.data._embedded.pilotEntities
                this.setState({pilotList : pilotList.map((d) =>
                        <tr key={d.alias}>
                            <td>{d.fullName}</td>
                            <td>{d.alias}</td>
                        </tr>)});
            })
    }

    render() {
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