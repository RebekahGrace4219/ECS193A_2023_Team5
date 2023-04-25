import { useState } from "react";
import "../../css/Shared/coloredText.css";
import axios from 'axios';
import PhotoUploadForm from "../Shared/Form/PhotoUploadForm";
import { createLeaguePictureURL } from "../../Helpers/CloudinaryURLHelpers";
import LeagueNameForm from "../Shared/Form/LeagueNameForm";
import LeagueDescriptionForm from "../Shared/Form/LeagueDescriptionForm";
import LeagueTypeForm from "../Shared/Form/LeagueTypeForm";

const backend_url = process.env.REACT_APP_PROD_BACKEND;
const LeagueEditForm = (props) => {
    const [name, setLeagueName] = useState("");
    const [description, setLeagueDescription] = useState("");
    const [photo, setPhoto] = useState("");
    const [type, setLeagueType] = useState("");
    const [nameUpdateResponse, setNameUpdateResponse] = useState("");
    const [photoUpdateResponse, setPhotoUpdateResponse] = useState("");
    const [typeUpdateResponse, setTypeUpdateResponse] = useState("");
    const [descriptionUpdateResponse, setDescriptionUpdateResponse] = useState("");


    const submitUpdatedPhoto = () => {
        setPhotoUpdateResponse("");
        if (photo === "") {
            setPhotoUpdateResponse("Could not update photo, it has not changed");
            return;
        }

        var formData = new FormData();
        formData.append("leaguePicture", photo);

        var config = {
            method: 'post',
            url: backend_url + 'league/update_picture',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data: formData
        };
        axios(config)
            .then(function (response) {
                setPhotoUpdateResponse("Successfully updated photo");
            })
            .catch(function (error) {
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
                console.log(error)
            });

    }

    const submitUpdatedName = () => {
        setNameUpdateResponse("");
        if (name === "") {
            setNameUpdateResponse("Could not update name");
            return;
        }

        var config = {
            method: 'post',
            url: backend_url + 'league/update_name',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data: {
                leagueName: name
            }
        };
        axios(config)
            .then(function (response) {
                setNameUpdateResponse("Successfully updated league name");
            })
            .catch(function (error) {
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
                console.log(error)
            });
    }

    const submitUpdatedDescription = () => {
        setDescriptionUpdateResponse("");
        if (description === "") {
            setDescriptionUpdateResponse("Could not update description");
            return;
        }

        var config = {
            method: 'post',
            url: backend_url + 'league/update_description',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data: {
                leagueDescription: description
            }
        };
        axios(config)
            .then(function (response) {
                setDescriptionUpdateResponse("Successfully updated league description");
            })
            .catch(function (error) {
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
                console.log(error)
            });
    }

    const submitUpdatedType = () => {
        setTypeUpdateResponse("");
        if (type === "") {
            setTypeUpdateResponse("Could not update type");
            return;
        }

        var config = {
            method: 'post',
            url: backend_url + 'league/update_type',
            headers: {
                Accept: 'application/json',
            },
            withCredentials: true,
            credentials: 'include',
            data: {
                leagueType: type
            }
        };
        axios(config)
            .then(function (response) {
                setTypeUpdateResponse("Successfully updated league type");
            })
            .catch(function (error) {
                if (error.response.status === 401) {
                    window.location.href = "/loginPage";
                }
                console.log(error)
            });
    }

    return (
        <div>
            <div className="formObj">
                <h2>League Picture</h2>
                <PhotoUploadForm>{{ "default": createLeaguePictureURL(props.leagueID), "func": setPhoto }}</PhotoUploadForm>
            </div>
            <button className="submitButton" onClick={submitUpdatedPhoto}><p className="submitButtonText">Submit</p></button>
            <p className = "greenBaseText">{photoUpdateResponse}</p>

            <LeagueNameForm updateName={setLeagueName} />
            <button className="submitButton" onClick={submitUpdatedName}><p className="submitButtonText">Submit</p></button>
            <p className = "greenBaseText">{nameUpdateResponse}</p>

            <LeagueDescriptionForm updateDescription={setLeagueDescription} />
            <button className="submitButton" onClick={submitUpdatedDescription}><p className="submitButtonText">Submit</p></button>
            <p className = "greenBaseText">{descriptionUpdateResponse}</p>

            <LeagueTypeForm defaultValue="" updateType={setLeagueType} />
            <button className="submitButton" onClick={submitUpdatedType}><p className="submitButtonText">Submit</p></button>
            <p className = "greenBaseText">{typeUpdateResponse}</p>
        </div>);
}

export default LeagueEditForm;