import React  from 'react';
import { Fragment } from 'react';
import Constellation from './Constellation';
import '../styles/Constellations.css';

function Constellations() {
    function getRows() {
        let output = [];

        let i;
        for(i = 0; i < 5; i++) {
            output.push(
                <Constellation key={i} className="constellation" />
            )
        }
        return output
    }

    function calculateConstellations() {
        let output = []

        let cols;
        for(cols = 0; cols < 20; cols++) {
            output.push(
                <div className="constellation-row">
                    {getRows()}
                </div>
            )
        }
        return output;
    }

    return(
        <Fragment>
            <div className="constellation-column">
                {calculateConstellations()}
            </div>
        </Fragment>
    )
}

export default Constellations;