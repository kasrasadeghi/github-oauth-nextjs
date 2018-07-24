import { Component } from 'react';
import paramsify from '../lib/paramsify';

export default class App extends Component {
    getUrl() {
        const params = {
            client_id: "26da4942f252fe0bc46c",
            redirect_uri: "http://localhost:3000/authed",
            scope: "repo",
            state: Math.random().toString(36).substring(7),
            allow_signup: false
        }
        return "https://github.com/login/oauth/authorize?" + paramsify(params);
    }

    render() {
        return (
            <a href={this.getUrl()}>auth</a>
        );
    }
}