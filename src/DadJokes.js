import React, { Component } from 'react';
import axios from 'axios';

class DadJokes extends Component {
    constructor() {
        super()
        this.state = {
            setup: '',
            punchline: ''
        }
    }

    render() {
        let klik = () => {
            let url = `https://safe-falls-22549.herokuapp.com/random_joke`
            axios.get(url)
                .then((info) => {
                    this.setState({
                        setup: info.data.setup,
                        punchline: info.data.punchline
                    })
                })
        }

        return (
            <center>
                <div className="card space px-4 py-3 my-5">
                    <h3 className="card-title">{this.state.setup}</h3>
                    <h5 className="card-text">{this.state.punchline}</h5>
                    <button className="btn btn-primary position" onClick={klik}>reload</button>
                </div>
            </center>
        )
    }
}

export default DadJokes