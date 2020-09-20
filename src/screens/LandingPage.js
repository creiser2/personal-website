import React from "react";
import { Fragment, Component } from "react";
import '../styles/LandingPage.css';
import Chevron from "../shared/Chevron";

class LandingPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="landing-page-container"> 
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