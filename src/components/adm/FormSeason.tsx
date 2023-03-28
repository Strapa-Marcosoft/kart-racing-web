import React, {useState} from "react";
import {Link} from "react-router-dom";
import AdmHeader from "../common/AdmHeader";
import kartRacingApi from "../../config/AxiosConfig";
import {OperationFeedback} from "../common/OperationFeedback";
import './Form.css'
import {FormButtons} from "../common/FormButtons";
interface FormValues{
    title: string
}

interface FormErrors{
    title?: string
}

const FormSeason = () => {

    const backLink = "/season"

    const [formValues, setFormValues] = useState<FormValues>({
        title: ""
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

        if (!formValues.title) {
            validationErrors.title = 'Please enter a title';
        }

        if (Object.keys(validationErrors).length > 0) {
            setFormErrors(validationErrors);
        } else {
            kartRacingApi.post('/seasonEntities', {
                title: formValues.title
            }).then(() => {
                setShowFormButtons(false)
                setShowOperationFeedback(true)
                setFormValues({title:''})
            })
        }
    }

    return (
        <div id="body">
            <AdmHeader/>
            <div id="main">
                <form onSubmit={handleSubmit}>
                    <div id="form">
                        <div className="title">Add Season</div>
                        <div className="fields">
                            <div className="label">Title:</div>
                            <div><input
                                type="text"
                                name="title"
                                value={formValues.title}
                                onChange={handleInputChange}/>
                                {formErrors.title && <div className="fieldValidation">{formErrors.title}</div>}
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

export default FormSeason