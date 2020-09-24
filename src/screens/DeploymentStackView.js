import React from "react";
import { Fragment, Component } from "react";
import Stack from "./Stack";
import "../styles/StackView.css";

import {
    firebaseImg,
    appStoreImg,
    awsApiGatewayImg,
    awsEc2Img,
    awsLambdaImg,
    awsRdsImg,
    herokuImg 
} from "../indices/StackImagesIndex";

class DeploymentStackView extends Component {
    componentDidMount() {
        this.rotateStack()
    }

    numSets = 2;
    state = {
        set: 0,
        rotating: true,
        sets: [this.d1, this.d2]
    }

    rotateStack() {
        setTimeout(() => {
            let nextSet = this.state.set + 1 >= this.state.sets.length ? 0 : this.state.set + 1
            if (this.state.rotating) {
                this.setState({
                    set: nextSet
                })
            }
            this.rotateStack()
        }, 5000)
    }


    renderDeploymentStack() {
        let output = this.state.sets.map((set) => {
            if (this.state.sets[this.state.set] === set) {
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

    d1() {
        return (
            <div className="sv-row-container">
                <div className="sv-col-container">
                    <div style={{ height: '25%' }} />
                    <div className="sf-light stack-cell-text">Apple App Store</div>
                    <img src={appStoreImg} alt="app-store" className="sc-large-img" />
                </div>
                <div className="sv-col-container">
                    <div style={{ height: '55%' }} />
                    <img src={awsApiGatewayImg} alt="aws-api-gateway" className="sc-large-img" />
                    <div className="sf-light stack-cell-text">Aws Api Gateway</div>
                </div>
                <div className="sv-col-container">
                    <div style={{ height: '15%' }} />
                    <div className="sf-light stack-cell-text">Aws Ec2</div>
                    <img src={awsEc2Img} alt="ec2" className="sc-medium-img" />
                </div>
                <div className="sv-col-container">
                    <div style={{ height: '55%' }} />
                    <div className="sf-light stack-cell-text">aws lambda</div>
                    <img src={awsLambdaImg} alt="lambda" className="sc-medium-img" />
                </div>
                <div className="sv-col-container">
                    <img src={awsRdsImg} alt="rds" className="sc-large-img" />
                    <div className="sf-light stack-cell-text">aws rds</div>
                </div>
            </div>
        )
    }

    d2() {
        return (
            <div className="sv-row-container">
                <div className="sv-col-container">
                    <div style={{ height: '25%' }} />
                    <div className="sf-light stack-cell-text">Apple App Store</div>
                    <img src={appStoreImg} alt="app-store" className="sc-small-medium-img" />
                </div>
                <div className="sv-col-container">
                    <div style={{ height: '65%' }} />
                    <div className="sf-light stack-cell-text">Firestore</div>
                    <img src={firebaseImg} alt="fb" className="sc-small-medium-img" />
                </div>
                <div className="sv-col-container">
                    <div className="sf-light stack-cell-text">Heroku</div>
                    <img src={herokuImg} alt="heroku" className="sc-small-medium-img" />
                    <div style={{ height: '65%' }} />
                </div>
            </div>
        )
    }

    render() {
        return (
            <Fragment>
                {this.props.active ?
                    <div className="">
                        {this.renderDeploymentStack()}
                    </div>
                :
                    <div className="hidden">
                        {this.renderDeploymentStack()}

                    </div>
                }
            </Fragment>
        )
    }
}

export default DeploymentStackView;