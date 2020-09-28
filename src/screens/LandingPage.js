import React from "react";
import { Fragment, Component } from "react";
import '../styles/LandingPage.css';
import Chevron from "../shared/Chevron";
import Constellations from "../shared/Constellations";

class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="landing-page-container"> 
                    <Constellations page={1} />
                    <div className="center">
                        <div className="topSpacer" />
                        <div className='header sf-semibold'>
                            Carl Reiser
                    </div>
                        <div className="subTitle sf-thin">
                            Software Engineer
                    </div>
                        <div className="midSpacer" />
                        <Chevron className="downChevron" direction="down" clickEvent={this.props.aboutMeClicked}/>
                        <div className="bottomSpacer" />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage;