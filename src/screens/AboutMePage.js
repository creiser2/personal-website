import React from "react";
import { Fragment, Component } from "react";

import CustomButtonHolder from "../shared/CustomButtonHolder";
import DevelopmentStackView from "./DevelopmentStackView";
import DeploymentStackView from "./DeploymentStackView";
import profilePicture from "../assets/profilePicture.png"
import Constellations from "../shared/Constellations";
import "../styles/AboutMePage.css";

class AboutMePage extends Component {
    state = {
        developmentClicked: true
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
                    <Constellations page={2}/>
                    <div className="am-text-holder">
                        <div className="am-spacer-1"></div>
                        <div className="ms-semibold am-header">
                            About Me
                        </div>
                        <div className="ms-thin-italic am-subtitle">
                            I am a software engineer who has a passion for building the best
                        </div>
                        <div className="ms-thin-italic am-subtitle">
                            possible product for the end user.
                        </div>
                    </div>
                    <div className="am-button-container">
                        {this.state.developmentClicked ? 
                            <Fragment>
                                <div id="development" className="am-button-filled ms-light" onClick={() => this.developmentClick()}>
                                    Development
                                </div>
                                <div className="am-spacer-2"></div>
                                <CustomButtonHolder text={"Deployment"} clickEvent={() => this.deploymentClick()} />
                            </Fragment>
                        :
                            <Fragment>
                                <CustomButtonHolder text={"Development"} clickEvent={() => this.developmentClick()} />
                                <div className="am-spacer-2"></div>
                                <div id="deployment" className="am-button-filled ms-light" onClick={() => this.deploymentClick()}>
                                    Deployment
                                </div>
                            </Fragment>
                        }
                    </div>
                    <div className="am-stack-container">
                        <img src={profilePicture} alt="profile" className="profile-picture" onClick={this.props.aboutMeClicked} />
                        <div className="am-spacer-3" />
                        <div className="stack">
                            <div className="stack-dev-deploy-container">
                                <DevelopmentStackView rotateSpeed={10000} active={this.state.developmentClicked} />
                                <DeploymentStackView rotateSpeed={10000} active={!this.state.developmentClicked} /> 
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutMePage;