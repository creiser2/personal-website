import React from 'react';
import { Component, Fragment } from 'react';
import SplashScreen from "./screens/SplashScreen";

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
        }, 500000)
    }

    render() {
        return (
            <Fragment>
                {this.state.isLoading ? 
                    <SplashScreen />
                :
                    <div>main</div>
                }
            </Fragment>
        )
    }
}

export default Main;
