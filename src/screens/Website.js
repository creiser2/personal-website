import React from 'react';
import { Component, Fragment } from 'react';

import { LandingPage, AboutMePage, WorkTimelinePage, ContactMePage, MadeWithBar } from "../indices/PagesIndex";

class Website extends Component {
    constructor(props) {
        super(props);
        this.aboutMePageRef = React.createRef();
        this.landingPageRef = React.createRef();
        this.workTimelinePageRef = React.createRef();
        this.contactMePageRef = React.createRef();

        this.state = {
            refs: {
                landingPageRef: null,
                aboutMePageRef: null,
                workTimelinePageRef: null,
                contactMePageRef: null,
            },
            scrollControlEnabled: false
        }
    }

    componentDidMount() {
        document.body.style = ""
        
        var timer = null;
        if(this.state.scrollControlEnabled) {
            window.addEventListener('scroll', () => {
                if (timer !== null) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    this.handleScroll()
                }, 50);
            }, false);

            this.setState({
                refs: {
                    landingPageRef: this.landingPageRef,
                    aboutMePageRef: this.aboutMePageRef,
                    workTimelinePageRef: this.workTimelinePageRef,
                    contactMePageRef: this.contactMePageRef,
                }
            })
        }
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
                <LandingPage ref={this.landingPageRef} aboutMeClicked={() => this.scrollToAboutMe()}/>
                <AboutMePage ref={this.aboutMePageRef} />
                <WorkTimelinePage ref={this.workTimelinePageRef}/>
                <ContactMePage createToast={(options) => this.props.createToast(options)} ref={this.contactMePageRef}/>
                <MadeWithBar />
            </Fragment>
        )
    }
}

export default Website;