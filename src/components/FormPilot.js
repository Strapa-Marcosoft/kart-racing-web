import {Component} from "react";
import {Link} from "react-router-dom";

class FormPilot extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fullName : "",
            alias : ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    render() {
        return (
            <div>
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
                        <td><button>Save</button></td>
                        <td><button><Link to="/pilot">Cancel</Link></button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default FormPilot