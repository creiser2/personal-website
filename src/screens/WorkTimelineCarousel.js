import React from 'react';
import { Fragment } from 'react';

import {
    CranberryLogo,
    JuiceLogo,
    FlatironLogo,
    CranberryFirstDisplay,
    CranberrySecondDisplay,
    CranberryThirdDisplay,
    JuiceFirstDisplay,
    JuiceSecondDisplay,
    JuiceThirdDisplay 
} from "../indices/CarouselIndex";

import {
    reactImg,
    railsImg
} from "../indices/StackImagesIndex"

import chevron from "../assets/chevron.png";

function WorkTimelineCarousel(props) {
    const renderDisplay = (display) => {
        switch(display) {
            case 0:
                return renderJuiceDisplay()
            case 1:
                return renderCranberryDisplay()
            case 2:
                return renderFlatironDisplay()
            default: 
                return renderJuiceDisplay() 
        }
    }

    const gotoUrl = (url) => {
        window.open(url)
    }

    const renderFlatironDisplay = () => {
        return (
            <Fragment>
                <img src={FlatironLogo} alt="flatiron-logo" className="wt-carousel-logo" />
                <div className="wt-carousel-main">
                    <div className="wt-carousel-vertical">
                        <div className="wt-carousel-app-name sf-light">
                            15-Week Coding Bootcamp
                        </div> 
                        <div style={{height: '15%'}} />
                        <div className="wt-carousel-button-container">
                            <div id="development" className="am-button-hollow sf-light" onClick={() => gotoUrl("https://mmash.herokuapp.com/")}>
                                Monster Mash
                            </div>
                            <div className="am-spacer-2"></div>
                            <div id="deployment" className="am-button-hollow sf-light" onClick={() => gotoUrl("https://shreddit-forums.herokuapp.com/")}>
                                Shreddit
                            </div>
                        </div>
                        <div style={{ height: '15%' }} />
                        <div className="wt-carousel-special-icon-holder">
                            <img src={reactImg} alt="react" className="wt-carousel-icon"/>
                            <div className="sf-thin wt-carousel-plus">
                                +
                            </div>
                            <img src={railsImg} alt="rails" className="wt-carousel-icon"/>
                        </div>
                        <div style={{ height: '15%' }} />
                        <div className="wt-carousel-app-name sf-light">
                            Full Stack Web Application Development
                        </div>
                    </div>
                </div>
            </Fragment>
        ) 
    }

    const renderJuiceDisplay = () => {
        return (
            <Fragment>
                <img src={JuiceLogo} alt="juice-reel" className="wt-carousel-logo" />
                <div className="wt-carousel-main">
                    <img src={JuiceFirstDisplay} className="wt-carousel-display-jr-1" alt="cranberry-display-1" />
                    <img src={JuiceSecondDisplay} className="wt-carousel-display-jr-2" alt="cranberry-display-2" />
                    <img src={JuiceThirdDisplay} className="wt-carousel-display-jr-3" alt="cranberry-display-3" />
                </div>
                <div className="wt-carousel-app-name sf-light">
                    Juice Reel
                </div>
            </Fragment>
        )
    }

    const renderCranberryDisplay = () => {
        return (
            <Fragment>
                <img src={CranberryLogo} alt="cranberry"  className="wt-carousel-logo"/>
                <div className="wt-carousel-main">
                    <img src={CranberryFirstDisplay} className="wt-carousel-display-cq-1" alt="cranberry-display-1" />
                    <img src={CranberrySecondDisplay} className="wt-carousel-display-cq-2" alt="cranberry-display-2" />
                    <img src={CranberryThirdDisplay} className="wt-carousel-display-cq-3" alt="cranberry-display-3" />
                </div>
                <div className="wt-carousel-app-name sf-light">
                    Cranberry Queues
                </div>
            </Fragment>
        )
    }

    return (
        <div className="wt-carousel-container">
            {renderDisplay(props.display.index)}
            <div className="wt-scroll-container">
                {props.display.index !== 0 ? 
                    <img src={chevron} alt="leftChevron" className="wt-left-chevron" onClick={() => props.leftChevronClicked()} />
                :
                    <img src={chevron} style={{visibility: "hidden"}} alt="leftChevron" className="wt-left-chevron" />
                }
                <div className="wt-time-container sf-thin">
                    {props.display.time}
                </div>
                {props.display.end ? 
                    <img src={chevron} style={{ visibility: "hidden" }} alt="rightChevron" className="wt-right-chevron" />
                :
                    <img src={chevron} alt="rightChevron" className="wt-right-chevron" onClick={() => props.rightChevronClicked()} />
                }
            </div>
        </div>
    )
}

export default WorkTimelineCarousel;