import React from "react";
import { Fragment, Component } from "react";

import StackView from "./StackView";
import profilePicture from "../assets/profilePicture.png"
import "../styles/AboutMePage.css";

class AboutMePage extends Component {
    state = {
        developmentClicked: true,
        set: 3
    }

    deploymentClick = () => {
        this.setState({
            developmentClicked: false
        })
    }

    developmentClick = () => {
        this.setState({
            developmentClicked: true
        })
    }

    render() {
        return (
            <Fragment>
                <div className="am-container">
                    <div className="am-text-holder">
                        <div className="am-spacer-1"></div>
                        <div className="sf-semibold am-header">
                            About Me
                        </div>
                        <div className="sf-thin-italic am-subtitle">
                            I am a software engineer who has a passion for building the best
                        </div>
                        <div className="sf-thin-italic am-subtitle">
                            possible product for the end user.
                        </div>
                    </div>
                    <div className="am-button-container">
                        {this.state.developmentClicked ? 
                            <Fragment>
                                <div id="development" className="am-button-filled sf-light" onClick={() => this.developmentClick()}>
                                    Development
                                </div>
                                <div className="am-spacer-2"></div>
                                <div id="deployment" className="am-button-hollow sf-light" onClick={() => this.deploymentClick()}>
                                    Deployment
                                </div>
                            </Fragment>
                        :
                            <Fragment>
                                <div id="development" className="am-button-hollow sf-light" onClick={() => this.developmentClick()}>
                                    Development
                                </div>
                                <div className="am-spacer-2"></div>
                                <div id="deployment" className="am-button-filled sf-light" onClick={() => this.deploymentClick()}>
                                    Deployment
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="am-stack-container">
                        <img src={profilePicture} alt="profile" className="profile-picture" onClick={this.props.aboutMeClicked} />
                        <div className="am-spacer-3" />
                        <div className="stack">
                            <StackView developmentClicked={this.state.developmentClicked} set={this.state.set} />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutMePage;