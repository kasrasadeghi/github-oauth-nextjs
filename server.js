import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

function getUrl(searchParams, state) {
    const params = {
        client_id: "26da4942f252fe0bc46c",
        client_secret: "4d794cc7c51e4e9e7e1a7222ed23b7ef52abffb2",
        code: searchParams.get('code'),
        redirect_uri: "http://localhost:3000/authed",
        state:
    }
    return "https://github.com/login/oauth/access_token?" + paramsify(params);
}

async function postAuth(search, state) {
    fetch(getUrl(new URLSearchParams(search)), {
        'method': 'POST'
    }).then(res => {
        this.setState({token: res})
    })
}

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.get('/postauth', (req, res) => {
    
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})