import {Component} from "react";
import kartRacingApi from "./AxiosConfig";
import AdmHeader from "./AdmHeader";
import {Link} from "react-router-dom";

class ListRound extends Component{
    constructor(props) {
        super(props);
        this.state = {
            roundList : ""
        }
        this.getRoundList();
    }

    getRoundList() {
        kartRacingApi.get("/roundEntities")
            .then( res => {
                let seasonList = res.data._embedded.seasonEntities;
                this.setState({seasonList: seasonList.map((d) =>
                        <tr>
                            <td>{d.season}</td>
                            <td>{d.location}</td>
                        </tr> )})
            });
    }

    render() {
        return(
            <div>
                <AdmHeader/>
                <h4>Round List</h4>
                <button className="btn btn-light"><Link to="/round/new">Add Round</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>Season</th>
                        <th>Location</th>
                    </tr>
                    </thead>
                    <tbody>{this.state.pilotList}</tbody>
                </table>
            </div>
        )
    }
}

export default ListRound;