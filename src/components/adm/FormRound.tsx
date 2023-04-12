import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "../common/AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";
import './Form.css'
import {FormButtons} from "../common/FormButtons";
import {OperationFeedback} from "../common/OperationFeedback";

interface FormValues{
    season: number
    location: number
    date:string
}

interface FormErrors{
    season?: string
    location?: string
    date?: string
}

interface Season {
    id: number
    title: string
}

interface Location {
    id: number
    title: string
}

interface RoundPilot {
    id: number
}

const FormRound = () => {

    const backLink = "/round"

    const [formValues, setFormValues] = useState<FormValues>({
        season: 0,
        location: 0,
        date: ""
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const [showFormButtons, setShowFormButtons] = useState(true)

    const [showOperationFeedback, setShowOperationFeedback] = useState(false)

    const [season, setSeason] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [seasonList, setSeasonList] = useState<Season[]>([]);
    const [locationList, setLocationList] = useState<Location[]>([]);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormValues({...formValues, [name]:value})
        setFormErrors({...formErrors, [name]: '' });
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>{
        const {name,value} = e.target;
        setFormValues({...formValues, [name]:value})
        setFormErrors({...formErrors, [name]: '' });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors:FormErrors = {};

        if (!formValues.season) {
            validationErrors.season = 'Please select the season';
        }

        if (!formValues.location) {
            validationErrors.location = 'Please select the location';
        }

        if (!formValues.date) {
            validationErrors.date = 'Please enter a date';
        }

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
        } else {

            const data = {
                season: formValues.season,
                location: formValues.location,
                date: formValues.date
            };
            kartRacingApi.post('/roundEntities', data)
                .then(roundResponse => {
                    const roundId = roundResponse.data.id;
                    kartRacingApi.get("/pilotEntities")
                        .then(pilotResponse => {
                            pilotResponse.data._embedded.pilotEntities.map((pilot: RoundPilot) => {
                                const roundPilotData = {
                                    round: roundId,
                                    pilot: pilot.id
                                }
                                kartRacingApi.post("/roundPilotEntities", roundPilotData);
                            })
                        })
                }).then(() => {
                setShowFormButtons(false)
                setShowOperationFeedback(true)
                setFormValues({
                    season: 0,
                    location: 0,
                    date:""
                })
            })
                .catch(error => {
                    alert(error);
                })
        }
    }


    useEffect(() => {
        getSeasonList();
        getLocationList();
    }, []);

    function getSeasonList() {
        kartRacingApi.get("/seasonEntities")
            .then(res => {
                setSeasonList(res.data._embedded.seasonEntities);
            });
    }

    function getLocationList() {
        kartRacingApi.get("/locationEntities")
            .then(res => {
                setLocationList(res.data._embedded.locationEntities);
            });
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <form onSubmit={handleSubmit}>
                    <div id={"form"}>
                        <div className="title">Add Round</div>
                        <div className={"fields"}>
                            <div className={"label"}>Season:</div>
                            <div>
                                <select value={formValues.season}
                                        onChange={handleSelectChange} required>
                                    <option value="">Please choose an option</option>
                                    {
                                        seasonList.map((d) =>
                                            <option key={d.id} value={d.id}>{d.title}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className={"label"}>Location:</div>
                            <div>
                                <select value={formValues.location}
                                        onChange={handleSelectChange}>
                                    <option value="">Please choose an option</option>
                                    {
                                        locationList.map((d) =>
                                            <option key={d.id} value={d.id}>{d.title}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className={"label"}>Date:</div>
                            <div>
                                <input type="text"
                                       name="title"
                                       value={formValues.date}
                                       onChange={handleInputChange}/>
                                {formErrors.date && <div className="fieldValidation">{formErrors.date}</div>}
                            </div>
                        </div>
                        {showFormButtons && <FormButtons cancelButtonLink={backLink}/>}
                        {showOperationFeedback && <OperationFeedback okButtonLink={backLink} />}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormRound