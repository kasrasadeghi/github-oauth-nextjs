import { Component } from 'react';
import paramsify from '../lib/paramsify';
import str from '../lib/str';

export default class App extends Component {
    state = {
        token: "none yet"
    }

    static async getInitialProps() {
        this.setState({params: new URLSearchParams(window.location.search)});
        fetch("/postauth", {
            method: 'POST',
            body: {search: window.location.search, state: }
        }).then(res => {
            this.setState({token: res})
        })
    }

    render() {
        return (
            <>
                <pre>{str(this.state.searchparams)}</pre>
                <pre>{str(this.state.token)}</pre>
            </>
        );
    }
}