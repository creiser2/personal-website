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
        }, 0)
    }

    render() {
        return (
            <Fragment>
                <div className='bg1'>
                    <div className='bg2'>
                    </div>
                </div>
                {this.state.isLoading ? 
                    <SplashScreen />
                :
                    <Website createToast={(options) => this.props.createToast(options)}/>
                }
            </Fragment>
        )
    }
}

export default Main;
