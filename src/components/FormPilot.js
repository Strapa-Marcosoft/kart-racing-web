import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";

class FormPilot extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fullName : "",
            alias : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.addNewPilot = this.addNewPilot.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    addNewPilot(){
        const responseOne = fetch('http://localhost:8080/pilotEntities', {
            "method": "POST",
            "headers": {
                "content-type": "application/json"
            },
            "body": JSON.stringify({
                fullName: this.state.fullName,
                alias: this.state.alias
            })
        });
    }

    render() {
        return (
            <div>
                <AdmHeader/>
                <h4>Add Pilot</h4>
                <table>
                    <tr>
                        <td>Full Name:</td>
                        <td><input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td>Alias:</td>
                        <td><input type="text" name="alias" value={this.state.alias} onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><button className="btn btn-light" onClick={this.addNewPilot}>Save</button></td>
                        <td><button className="btn btn-light"><Link to="/pilot">Cancel</Link></button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default FormPilot