import React from "react";
import { Fragment } from "react";

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
    appStoreImg,
    awsApiGatewayImg,
    awsEc2Img,
    awsLambdaImg,
    awsRdsImg,
    herokuImg 
} from "../indices/StackImagesIndex";

function StackView(props) {

    const renderTechStack = () => {
        switch(props.set) {
            case 1:
                return s1();
            case 2:
                return s2();
            case 3:
                return s3();
            default:
                return s1();
        }
    }

    const renderDeploymentStack = () => {
        switch (props.set) {
            case 1:
                return d1();
            case 2:
                return d2();
            default:
                return d1();
        }
    }

    const d1 = () => {
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

    const d2 = () => {
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

    const s1 = () => {
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

    const s2 = () => {
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

    const s3 = () => {
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

    return (
        <Fragment>
            {props.developmentClicked ? 
                renderTechStack()
            :
                renderDeploymentStack()
            }
        </Fragment>
    )
}

export default StackView;