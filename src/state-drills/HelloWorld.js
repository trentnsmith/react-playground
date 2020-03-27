import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        who: 'world'
    }
    onWorldClick = () => {
        this.setState({
            who: 'world'
        })
    } 
    onFriendClick = () => {
        this.setState({
            who: 'friend'
        })
    } 
    onReactClick = () => {
        this.setState({
            who: 'React'
        })
    } 
    render() {
        return (
            <div>
                <p>Hello, {this.state.who} </p>
                <button onClick={this.onWorldClick}>World</button>
                <button onClick={this.onFriendClick}>Friend</button>
                <button onClick={this.onReactClick}>React</button>
            </div>
        )
    }
}




export default HelloWorld;