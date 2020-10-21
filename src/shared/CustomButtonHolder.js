import React from 'react';
import { Fragment, Component } from 'react';

class CustomButtonHolder extends Component {

    state = {
        mouseOver: false
    }

    mouseLeave = () => {
        this.setState({
            mouseOver: false
        })
    }

    mouseEnter = () => {
        this.setState({
            mouseOver: true
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.mouseOver ?
                    <div id="deployment" className="am-button-filled ms-light" onClick={() => this.props.clickEvent()} onMouseLeave={() => this.mouseLeave()} onMouseEnter={() => this.mouseEnter()}>
                        {this.props.text}
                    </div>
                :
                    <div id="development" className="am-button-hollow ms-light" onClick={() => this.props.clickEvent()} onMouseLeave={() => this.mouseLeave()} onMouseEnter={() => this.mouseEnter()}>
                        {this.props.text}
                    </div>
                }
            </Fragment>
        )
    }
}

export default CustomButtonHolder;