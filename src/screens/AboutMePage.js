import React from "react";
import { Fragment, Component } from "react";

import "../styles/AboutMePage.css";

class AboutMePage extends Component {
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
                        <div className="am-button-filled sf-light">
                            Development
                        </div>
                        <div className="am-spacer-2"></div>
                        <div className="am-button-hollow sf-light">
                            Deployment
                        </div>
                    </div>
                    <div className="am-stack-container">

                    </div>
                </div>
            </Fragment>
        )
    }
}

export default AboutMePage;