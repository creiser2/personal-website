import React from "react";
import { Fragment, Component } from "react";
import ContactMeForm from "./ContactMeForm";
import "../styles/ContactMePage.css";
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Constellations from "../shared/Constellations";
import astronautTwo from "../assets/astronaut-2.png";

class ContactMePage extends Component {
    downloadResume = () => {
        window.open("https://docs.google.com/document/d/1XR0rjI32EwSk5BRdY8mGmYBYla0c46r5Xf-HmcZBLjA/export?format=pdf");
    }

    render() {
        return (
            <Fragment>
                <div className="cm-container">
                    <Constellations page={4}/>
                    <img src={astronautTwo} alt="astronaut-two" className="astronaut-two" />
                    <div className="cm-body-container">
                        <div className="wt-header-holder">
                            <div style={{ height: '25%' }} />
                            <div className="ms-semibold am-header">
                                Contact Me
                        </div>
                        </div>
                        <ContactMeForm createToast={(options) => this.props.createToast(options)} />
                        <div className="cm-download-resume">
                            <Button variant="contained" color="primary" onClick={() => this.downloadResume()}>
                                Resume.pdf
                            <GetAppIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactMePage;