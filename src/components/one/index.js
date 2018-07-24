import React, { Component } from 'react';
import Two from '../two';
// import {Ali} from '../../App'

export default class Aak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clock: new Date().toLocaleString()
        }
        this.update()
    }
    update() {
        setInterval(() => {
            this.setState(
                {
                    clock: new Date().toLocaleString()
                }
            )
        }, 1000)
    }
    render() {
        return (
            <div className="AAK">
                <h1 style={{ color: "red",textAlign:"center" }}>{this.state.clock}</h1>

                <Two c={this.state.clock} />

            </div>
        );
    }
}
