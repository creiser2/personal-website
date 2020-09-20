import React from "react";
import { Component } from "react";
import downChevron from "../assets/chevron.png"

class Chevron extends Component {
    state = {
        opacity: 0.7
    }

    mouseEnter = () => {
        this.setState({
            opacity: 1.0
        })
    }

    mouseLeave = () => {
        this.setState({
            opacity: 0.7
        })
    }

    render() {
        return (
            <img id="chevron" src={downChevron} alt="chevron" style={{ opacity: this.state.opacity }} className={this.props.className} onClick={() => this.props.clickEvent()} onMouseLeave={() => this.mouseLeave()} onMouseEnter={() => this.mouseEnter()} />
        )
    }
}

export default Chevron;