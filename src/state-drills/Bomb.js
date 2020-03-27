import React, { Component } from 'react';

let ourInterval 
class Bomb extends Component {

    state = {
        count: 0
    }
    componentWillMount() {
        ourInterval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(ourInterval)
    }
    render() {
        let text = ' '
        if (this.state.count % 2 === 0) {
            text = 'tick'
        }
        else if (this.state.count % 2 !== 0) {
            text = 'tock'
        }
        if (this.state.count >= 8) {
            text = 'BOOM!!!'   
            clearInterval(ourInterval) 
        }
        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}




export default Bomb