import React from "react";
import { Fragment, Component } from "react";
import Stack from "./Stack";
import "../styles/StackView.css";

import {
    reactImg,
    reduxImg,
    nodeImg,
    pgImg,
    firebaseImg,
    swiftImg,
    vueImg,
    vuexImg,
    railsImg,
    mySqlImg,
} from "../indices/StackImagesIndex";

class DevelopmentStackView extends Component {
    componentDidMount() {
        this.rotateStack()
    }
    
    numSets = 3;
    state = {
        set: 0,
        rotating: true,
        sets: [this.s1, this.s2, this.s3]
    }

    rotateStack() {
        setTimeout(() => {
            let nextSet = this.state.set + 1 >= this.state.sets.length ? 0 : this.state.set + 1
            if(this.state.rotating) {
                this.setState({
                    set: nextSet
                })
            }
            this.rotateStack()
        }, 5000)
    }

    renderDevelopmentStack() {
        let output = this.state.sets.map((set) => {
            if(this.state.sets[this.state.set] === set) {
                return (
                    <div>
                        {set()}
                    </div>
                )
            } 
            return (
                <div className="hidden">
                    {set()}
                </div>
            )
        })
        
        return output;
    }

    s1() {
        return (
            <div className="sv-row-container">
                <div className="sv-col-container">
                    <div style={{ height: '25%' }} />
                    <img src={reactImg} alt="react" className="sc-large-img"/>
                    <div className="sf-light stack-cell-text">frontend</div>
                </div>
                <div className="sv-col-container">
                    <div className="sf-light stack-cell-text">state management</div>
                    <img src={reduxImg} alt="redux" className="sc-small-img"/>
                    <div style={{ height: '10%' }} />
                </div>
                <div className="sv-col-container">
                    <div style={{ height: '55%' }} />
                    <img src={nodeImg} alt="node" className="sc-small-img"/>
                    <div className="sf-light stack-cell-text">backend</div>
                </div>
                <div className="sv-col-container">
                    <img src={pgImg} alt="pg" className="sc-medium-img"/>
                    <div className="sf-light stack-cell-text">data store</div>
                </div>
            </div>
        )
    }

    s2() {
        return (
            <div className="sv-row-container">
                <div className="sv-col-container">
                    <div style={{ height: '45%' }} />
                    <div className="sf-light stack-cell-text">frontend</div>
                    <img src={swiftImg} alt="swift" className="sc-small-img" />
                </div>
                <div className="sv-col-container">
                    <img src={firebaseImg} alt="fb" className="sc-large-img" />
                    <div className="sf-light stack-cell-text">backend</div>
                </div>
            </div>
        )
    }

    s3() { 
        return (
            <div className="sv-row-container">
                <div className="sv-col-container">
                    <div style={{ height: '25%' }} />
                    <img src={vueImg} alt="vue" className="sc-large-img" />
                    <div className="sf-light stack-cell-text">frontend</div>
                </div>
                <div className="sv-col-container">
                    <div className="sf-light stack-cell-text">state management</div>
                    <img src={vuexImg} alt="vuex" className="sc-small-img" />
                    <div style={{ height: '35%' }} />
                    <img src={nodeImg} alt="node" className="sc-small-img" />
                    <div className="sf-light stack-cell-text">middleware</div>
                </div>
                <div className="sv-col-container">
                    <img src={railsImg} alt="rails" className="sc-medium-img" />
                    <div className="sf-light stack-cell-text">backend</div>
                </div>
                <div className="sv-col-container">
                    <div style={{ height: '65%' }} />
                    <img src={mySqlImg} alt="mysql" className="sc-medium-img" />
                    <div className="sf-light stack-cell-text">data store</div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                {this.props.active ? 
                    <div className="">
                        {this.renderDevelopmentStack()}
                    </div>
                :
                    <div className="hidden">
                        {this.renderDevelopmentStack()}
                    </div>
                }
            </Fragment>
        )
    }
}

export default DevelopmentStackView;