import React from 'react';
import '../styles/SplashScreen.css';
import Constellations from "../shared/Constellations";
import { Fragment } from 'react';
function SplashScreen() {
    return (
        <Fragment>
            <div className='bg1'>
                <div className='bg2'>
                </div>
            </div>
            < Constellations/>
            <div className='splash-text sf-semibold center-xy'>
                CR
            </div>
        </Fragment>
    );
}

export default SplashScreen;