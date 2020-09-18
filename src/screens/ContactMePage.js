import React from "react";
import { Fragment, Component } from "react";

import "../styles/ContactMePage.css";

class ContactMePage extends Component {
    render() {
        return (
            <Fragment>
                <div className="contact-me-container">
                    <div className="wt-header-holder">
                        <div style={{ height: '25%' }} />
                        <div className="sf-semibold am-header">
                            Contact Me
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ContactMePage;