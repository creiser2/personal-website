import React from "react";
import { Fragment, Component } from "react";
import '../styles/LandingPage.css';
import Chevron from "../shared/Chevron";
import Constellations from "../shared/Constellations";
import astronautOne from "../assets/homepage-bg-astronaut.png";
import { LinkedInLogo, GithubLogo, EmailLogo } from "../indices/LandingPageIndex";

class LandingPage extends Component {
    linkedInClicked = () => {
        window.open("https://www.linkedin.com/in/carl-reiser-3a20a912a/")
    }

    gitHubClicked = () => {
        window.open("https://github.com/creiser2/personal-website")
    }

    emailClicked = () => {
        window.open("mailto:carlreiser4@gmail.com")
    }

    render() {
        return (
            <Fragment>
                <div className="landing-page-container"> 
                    <Constellations page={1} />
                    <div className="astronaut-one-container">
                        <img src={LinkedInLogo} alt="linkedin" className="lp-logo lp-linkedIn" onClick={() => this.linkedInClicked()}/>
                        <img src={GithubLogo} alt="github" className="lp-logo lp-github" onClick={() => this.gitHubClicked()}/>
                        <img src={EmailLogo} alt="email" className="lp-logo lp-email" onClick={() => this.emailClicked()}/>
                        <img src={astronautOne} alt="astronaut" className="astronaut-one" />
                    </div>
                    <div className="center">
                        <div className="topSpacer" />
                        <div className='header ms-semibold'>
                            Carl Reiser
                    </div>
                        <div className="subTitle ms-thin">
                            Software Engineer
                        </div>
                        <div className="midSpacer" />
    
                    </div>
                    <div className="downChevronHolder">
                        <Chevron className="downChevron" direction="down" clickEvent={this.props.aboutMeClicked} />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage;