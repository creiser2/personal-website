import React from "react";
import { Fragment, Component } from "react";
import ContactMeForm from "./ContactMeForm";
import "../styles/ContactMePage.css";
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Constellations from "../shared/Constellations";
import { awsSes, awsAmplify, reactImg, awsLambdaImg } from "../indices/StackImagesIndex";

class ContactMePage extends Component {
    downloadResume = () => {
        window.open("https://docs.google.com/document/d/1XR0rjI32EwSk5BRdY8mGmYBYla0c46r5Xf-HmcZBLjA/export?format=pdf");
    }

    render() {
        return (
            <Fragment>
                <div className="cm-container">
                    <Constellations page={4}/>
                    <div className="cm-body-container">
                        <div className="wt-header-holder">
                            <div style={{ height: '25%' }} />
                            <div className="sf-semibold am-header">
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
                    <div className="cm-mw-container">
                        <div className="cm-mw-text">
                            Made With
                        </div>
                        <div className="cm-mw-icon-row">
                            <img src={awsSes} alt="ses" className="cm-mw-icon" />
                            <div className="cm-mw-plus">·</div>
                            <img src={awsAmplify} alt="amplify" className="cm-mw-icon" />
                            <div className="cm-mw-plus">·</div>
                            <img src={reactImg} alt="react" className="cm-mw-icon" />
                            <div className="cm-mw-plus">·</div>
                            <img src={awsLambdaImg} alt="lambda" className="cm-mw-icon" />
                        </div>
                        <div style={{height: "5%"}} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactMePage;