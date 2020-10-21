import React from "react";
import { Fragment, Component } from "react";
import "../styles/ContactMePage.css";
import { awsSes, awsAmplify, reactImg, awsLambdaImg } from "../indices/StackImagesIndex";

class MadeWithBar extends Component {
    render() {
        return (
            <Fragment>
                <div className="mw-bar">
                    <div className="cm-mw-text ms-thin">
                        Made With
                    </div>
                    <div className="cm-mw-icon-row">
                        <img src={awsSes} alt="ses" className="cm-mw-icon" />
                        <div className="cm-mw-plus">·</div>
                        <img src={awsAmplify} alt="amplify" className="cm-mw-icon" />
                        <div className="cm-mw-plus">·</div>
                        <img src={reactImg} alt="react" className="cm-mw-icon" />
                        <div className="cm-mw-plus">·</div>
                        <img href="www.google.com" src={awsLambdaImg} alt="lambda" className="cm-mw-icon" />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MadeWithBar;