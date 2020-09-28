import React from 'react';
import { Component, Fragment } from 'react';

import { LandingPage, AboutMePage, WorkTimelinePage, ContactMePage } from "../indices/PagesIndex";

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

    // get the scroll height and the tops of all refs, and see if we are close to one to animate to
    handleScroll = () => {
        const lastScrollY = window.scrollY;
        const threshold = 250;
        
        if (Math.abs(this.state.refs.landingPageRef.current._reactInternalFiber.child.stateNode.offsetTop - lastScrollY) <= threshold) {
            this.scrollToLandingPage()
        } else if (Math.abs(this.state.refs.aboutMePageRef.current._reactInternalFiber.child.stateNode.offsetTop - lastScrollY) <= threshold) {
            this.scrollToAboutMe()
        } else if (Math.abs(this.state.refs.workTimelinePageRef.current._reactInternalFiber.child.stateNode.offsetTop - lastScrollY) <= threshold) {
            this.scrollToWorkTimelinePage()
        } else if (Math.abs(this.state.refs.contactMePageRef.current._reactInternalFiber.child.stateNode.offsetTop - lastScrollY) <= threshold) {
            this.scrollToContactMePage()
        }
    }

    scrollToLandingPage = () => {
        window.scrollTo({
            top: this.landingPageRef.current._reactInternalFiber.child.stateNode.offsetTop,
            left: 0,
            behavior: 'smooth'
        }); 
    }

    scrollToAboutMe() {
        window.scrollTo({
            top: this.aboutMePageRef.current._reactInternalFiber.child.stateNode.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }
    
    scrollToWorkTimelinePage = () => {
        window.scrollTo({
            top: this.workTimelinePageRef.current._reactInternalFiber.child.stateNode.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    scrollToContactMePage = () => {
        window.scrollTo({
            top: this.contactMePageRef.current._reactInternalFiber.child.stateNode.offsetTop,
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
                <ContactMePage ref={this.contactMePageRef}/>
            </Fragment>
        )
    }
}

export default Website;