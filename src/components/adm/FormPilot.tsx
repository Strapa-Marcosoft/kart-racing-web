import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import AdmHeader from "../common/AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";
import {FormButtons} from "../common/FormButtons";
import {OperationFeedback} from "../common/OperationFeedback";


interface FormValues{
    fullName: string
    alias: string
}

interface FormErrors{
    fullName?: string
    alias?:string
}

const FormPilot = () => {

    const backLink = "/admin/pilot"

    const [formValues, setFormValues] = useState<FormValues>({
        fullName: "",
        alias: ""
    });

    const [formErrors, setFormErrors] = useState<FormErrors>({});

    const [showFormButtons, setShowFormButtons] = useState(true)

    const [showOperationFeedback, setShowOperationFeedback] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = e.target;
        setFormValues({...formValues, [name]:value})
        setFormErrors({...formErrors, [name]: '' });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors:FormErrors = {};

        if (!formValues.fullName) {
            validationErrors.fullName = 'Please enter a name';
        }

        if (!formValues.alias) {
            validationErrors.alias = 'Please enter a alias';
        }

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
        } else {
            kartRacingApi.post('/pilotEntities', {
                fullName: formValues.fullName,
                alias: formValues.alias
            }).then(() => {
                setShowFormButtons(false)
                setShowOperationFeedback(true)
                setFormValues({
                    fullName: "",
                    alias: ""
                })
            })
        }
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <form onSubmit={handleSubmit}>
                    <div id={"form"}>
                        <div className="title">Add Pilot</div>
                        <div className={"fields"}>
                            <div className={"label"}>Full Name:</div>
                            <div>
                                <input type="text"
                                       name="fullName"
                                       value={formValues.fullName}
                                       onChange={handleInputChange}/>
                                {formErrors.fullName && <div className="fieldValidation">{formErrors.fullName}</div>}
                            </div>
                            <div className={"label"}>Alias:</div>
                            <div>
                                <input type="text"
                                       name="alias"
                                       value={formValues.alias}
                                       onChange={handleInputChange}/>
                                {formErrors.alias && <div className="fieldValidation">{formErrors.alias}</div>}
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

export default FormPilot