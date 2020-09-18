import React from "react";
import { Fragment, Component } from "react";

import "../styles/WorkTimelinePage.css";
import WorkTimelineCarousel from "./WorkTimelineCarousel";

class WorkTimelinePage extends Component {
    displays = [
        {
            index: 0,
            name: "Juice Reel",
            time: "2020 - Present"
        },
        {
            index: 1,
            name: "Cranberry Queues",
            time: "2019 - Present"
        },
        {
            index: 2,
            name: "Flatiron School",
            time: "Summer 2018",
            end: true
        }
    ]

    state = {
        display: 2
    }

    leftChevronClicked = () => {
        if(this.state.display === 0) {
            return
        }
        this.setState({
            display: this.state.display - 1
        })
    }

    rightChevronClicked = () => {
        if(this.state.display === this.displays.length-1) {
            return
        }
        this.setState({
            display: this.state.display + 1
        })
    }

    render() {
        return (
            <Fragment>
                <div className="wt-container">
                    <div className="wt-header-holder">
                        <div style={{height: '25%'}} />
                        <div className="sf-semibold am-header">
                            Work Timeline
                        </div>
                    </div>
                    <WorkTimelineCarousel leftChevronClicked={this.leftChevronClicked} rightChevronClicked={this.rightChevronClicked} display={this.displays[this.state.display]}/>
                </div>
            </Fragment>
        )
    }
}

export default WorkTimelinePage;