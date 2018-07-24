import { Component } from 'react';
import paramsify from '../lib/paramsify';
import str from '../lib/str';

export default class App extends Component {
    state = {
        token: "none yet"
    }

    getUrl(searchParams) {
        const params = {
            client_id: "26da4942f252fe0bc46c",
            client_secret: "4d794cc7c51e4e9e7e1a7222ed23b7ef52abffb2",
            code: searchParams.get('code'),
        }
        return "https://github.com/login/oauth/access_token?" + paramsify(params);
    }

    componentDidMount() {
        this.setState({params: new URLSearchParams(window.location.search)});
        fetch(this.getUrl(new URLSearchParams(window.location.search)), {
            'method': 'POST',
            'cors': ''
        })
        .then(res => {
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