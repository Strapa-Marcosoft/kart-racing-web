import {Component} from "react";
import {Link} from "react-router-dom";

class FormLocation extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title : ""
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
                        <td>Title:</td>
                        <td><input type="text" name="title" value={this.state.title} onChange={this.handleChange}/></td>
                    </tr>
                    <tr>
                        <td><button>Save</button></td>
                        <td><button><Link to="/location">Cancel</Link></button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default FormLocation;