import React from 'react';
import { Component, Fragment } from 'react';
import SplashScreen from "./screens/SplashScreen";
import Website from "./screens/Website";

class Main extends Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        await this.splashLoad()
    }

    async splashLoad() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 5000)
    }

    render() {
        return (
            <Fragment>
                {this.state.isLoading ? 
                    <SplashScreen />
                :
                    <Website />
                }
            </Fragment>
        )
    }
}

export default Main;
