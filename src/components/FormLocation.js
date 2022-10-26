import {Component} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

class FormLocation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title : ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.addNewLocation = this.addNewLocation.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    addNewLocation(){

        kartRacingApi.post('/locationEntities',{
            title: this.state.title
        })

    }

    render() {
        return (
            <div>
                <AdmHeader/>
                <h4>Add Location</h4>


                    Title
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>


                <table>
                    <tr>
                        <td><button className="btn btn-light" onClick={this.addNewLocation}>Save</button></td>
                        <td><button className="btn btn-light"><Link to="/location">Cancel</Link></button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default FormLocation;