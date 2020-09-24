import React from 'react';
import { Fragment } from 'react';

import CustomButtonHolder from "../shared/CustomButtonHolder";

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

function scrollToWindow(oldWindow, newWindow) {
    if(oldWindow === newWindow) {
        return;
    }

    let container = document.getElementById("carousel-root")
    container.scrollTo({
        top: 0,
        left: window.innerWidth*newWindow,
        behavior: "smooth"
    })
}

function WorkTimelineCarousel(props) {
    const renderDisplays = () => {
        let carousel = [];
        props.displays.forEach(display => {
            carousel.push(
                <Fragment>
                    <div className="wt-carousel-container">
                        <div className="wt-carousel-window">
                            {renderDisplay(display.id)}
                        </div>
                    </div>
                </Fragment>
            )
        })

        return (
            carousel
        )
    }
    const [window, setWindow] = React.useState(props.window)

    React.useEffect(() => {
        setWindow(props.window)
        scrollToWindow(window, props.window)
    }, [props.window, window])

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
                            <CustomButtonHolder text={"Monster Mash"} clickEvent={() => props.goToUrl("https://mmash.herokuapp.com/")} />
                            <div className="am-spacer-2"></div>
                            <CustomButtonHolder text={"Shreddit"} clickEvent={() => props.goToUrl("https://shreddit-forums.herokuapp.com/")} />
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
                    </div>
                </div>
                <div className="wt-carousel-app-name sf-light" onClick={() => props.goToUrl("https://flatironschool.com/career-courses/coding-bootcamp")}>
                    Full Stack Web Application Development
                </div>
            </Fragment>
        ) 
    }

    const renderJuiceDisplay = () => {
        return (
            <Fragment>
                <img src={JuiceLogo} alt="juice-reel" className="wt-carousel-logo" />
                <div className="wt-carousel-main">
                    <img src={JuiceFirstDisplay} className="wt-carousel-display-jr-1" alt="juice-display-1" />
                    <img src={JuiceSecondDisplay} className="wt-carousel-display-jr-2" alt="juice-display-2" />
                    <img src={JuiceThirdDisplay} className="wt-carousel-display-jr-3" alt="juice-display-3" />
                </div>
                <div className="wt-carousel-app-name sf-light" onClick={() => props.goToUrl("https://apps.apple.com/us/app/juice-reel/id1527960097")}>
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
                <div className="wt-carousel-app-name sf-light" onClick={() => props.goToUrl("https://apps.apple.com/us/app/cranberry-queues/id1484019324")}>
                    Cranberry Queues
                </div>
            </Fragment>
        )
    }

    return (
        <div id="carousel-root" className="wt-carousel-root">
            {renderDisplays()}
        </div>
    )
}

export default WorkTimelineCarousel;