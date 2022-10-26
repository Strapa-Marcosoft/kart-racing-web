import { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import AdmHeader from "./AdmHeader";
import kartRacingApi from "./AxiosConfig";

class ListSeason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasonList: ""
        }
        this.getSeasonList();
    }

    getSeasonList() {
        kartRacingApi.get("/seasonEntities")
            .then( res => {
                let seasonList = res.data._embedded.seasonEntities;
                this.setState({seasonList: seasonList.map((d) =>
                    <tr key={d.title}>
                        <td>{d.title}</td>
                    </tr> )})
            });
    }

    render() {
        return (
            <div>
                <h4>Season List</h4>
                <button className="btn btn-light"><Link to="season/new">Add Season</Link></button>
                <button className="btn btn-light"><Link to="/">Back</Link></button>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>{this.state.seasonList}</tbody>
                </table>
            </div>
        );
    }
}

export default ListSeason;