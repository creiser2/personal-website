import React from "react";
import { Fragment, Component } from "react";

import "../styles/WorkTimelinePage.css";
import WorkTimelineCarousel from "./WorkTimelineCarousel";
import Chevron from "../shared/Chevron";

class WorkTimelinePage extends Component {
    state = {
        window: 0,
        displays: [
            {
                id: 0,
                name: "Juice Reel",
                time: "2020 - Present"
            },
            {
                id: 1,
                name: "Cranberry Queues",
                time: "2019 - Present"
            },
            {
                id: 2,
                name: "Flatiron School",
                time: "Summer 2018",
            } 
        ]
    }

    goToUrl = (url) => {
        debugger;
        window.open(url)
    }

    leftChevronClicked = () => {
        this.setState({
            window: this.state.window - 1
        })
    }

    rightChevronClicked = () => {
        this.setState({
            window: this.state.window + 1
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
                    <WorkTimelineCarousel displays={this.state.displays} window={this.state.window} goToUrl={(url) => this.goToUrl(url)}/>
                    <div className="wt-scroll-container">
                        {this.state.window === 0 ? 
                            <Chevron className={"wt-left-chevron hidden"} clickEvent={() => this.leftChevronClicked()} />
                        :
                            <Chevron className={"wt-left-chevron"} clickEvent={() => this.leftChevronClicked()} />
                        }
                        <div className="wt-time-container sf-thin">
                            {this.state.displays[this.state.window].time}
                        </div>
                        {this.state.window !== this.state.displays.length -1 ?
                            <Chevron className={"wt-right-chevron"} clickEvent={() => this.rightChevronClicked()} />
                         :
                            <Chevron className={"wt-right-chevron hidden"} clickEvent={() => this.rightChevronClicked()} />
                        } 
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default WorkTimelinePage;