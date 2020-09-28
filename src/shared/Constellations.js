import React  from 'react';
import { Fragment } from 'react';
import Constellation from './Constellation';
import '../styles/Constellations.css';

function Constellations(props) {
    function calculateConstellations() {
        switch(props.page) {
            case 1:
                return p1();
            case 2:
                return p2();
            case 3:
                return p3();
            case 4:
                return p4();
            default: 
                return p1();
        }
    }

    function p1() {
        return [
            <div className="constellation-row">
                <Constellation style={{'opacity': 0.70}} className="constellation" />
                <Constellation style={{ 'opacity': 0.55 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.60 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.70 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.45 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.70 }} className="constellation" />
            </div>,
        ];
    }

    function p2() {
        return [
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.57 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.55 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.57 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.77 }} className="constellation" />
            </div>
        ]; 
    }

    function p3() {
        return [
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>
        ];
    }

    function p4() {
        return [
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>,
            <div className="constellation-row">
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
                <Constellation style={{ 'opacity': 0.30 }} className="constellation" />
            </div>
        ];
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