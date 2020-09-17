import React from 'react';
import { Component, Fragment } from 'react';

import Constellations from "../shared/Constellations";

class Website extends Component {
    componentDidMount() {
        document.body.style = ""
    }

    render() {
        return (
            <Fragment>
                <div className='bg1'>
                    <div className='bg2'>
                    </div>
                </div>
                < Constellations />
                <div className='splash-text sf-semibold center-xy'>
                    Main
                </div>
            </Fragment>
        )
    }
}

export default Website;