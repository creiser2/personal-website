import React from 'react';
import { Component, Fragment } from 'react';
import Website from "./screens/Website";

class Main extends Component {
    render() {
        return (
            <Fragment>
                <div className='bg1'>
                    <div className='bg2'>
                    </div>
                </div>
                <Website createToast={(options) => this.props.createToast(options)}/>
            </Fragment>
        )
    }
}

export default Main;
