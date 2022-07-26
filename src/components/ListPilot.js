import {Component} from "react";
import {Link} from "react-router-dom";

class ListPilot extends Component{
    constructor(props) {
        super(props);
        this.state = {
            pilotList : ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.getPilotList = this.getPilotList.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    async getPilotList(){
        const response = await  fetch('http://localhost:8080/pilotEntities', {
            "method": "GET"
        });
        const data = await response.json();
        this.setState({pilotList : data.map((d) => <tr key={d.id}><td>{d.id}</td><td>{d.title}</td></tr>)});
    }

    render() {
        this.getPilotList()
        return (
            <div>
                <div className="title">Pilot List</div>
                <button><Link to="/pilot/new">Add Pilot</Link></button>
                <button><Link to="/">Back</Link></button>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                        <th>Alias</th>
                    </tr>
                    {this.state.pilotList}
                </table>
            </div>
        );
    }
}

export default ListPilot;