import React from 'react';
import { Component, Fragment } from 'react';

import Constellations from "../shared/Constellations";
import { LandingPage, AboutMePage, WorkTimelinePage, ContactMePage } from "./PagesIndex";

class Website extends Component {
    constructor(props) {
        super(props);
        this.aboutMePageRef = React.createRef();
    }

    componentDidMount() {
        document.body.style = ""
    }

    scrollToAboutMe() {
        window.scrollTo({
            top: this.aboutMePageRef.current._reactInternalFiber.child.stateNode.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    } 

    render() {
        return (
            <Fragment>
                <Constellations />
                <LandingPage aboutMeClicked={() => this.scrollToAboutMe()}/>
                <AboutMePage ref={this.aboutMePageRef} />
                <WorkTimelinePage />
                <ContactMePage />
            </Fragment>
        )
    }
}

export default Website;