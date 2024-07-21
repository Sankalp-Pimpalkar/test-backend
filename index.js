require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
console.log(process.env.PORT)

const githubData = {
    "login": "Sankalp-Pimpalkar",
    "id": 170242956,
    "node_id": "U_kgDOCiWzjA",
    "avatar_url": "https://avatars.githubusercontent.com/u/170242956?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sankalp-Pimpalkar",
    "html_url": "https://github.com/Sankalp-Pimpalkar",
    "followers_url": "https://api.github.com/users/Sankalp-Pimpalkar/followers",
    "following_url": "https://api.github.com/users/Sankalp-Pimpalkar/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sankalp-Pimpalkar/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sankalp-Pimpalkar/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sankalp-Pimpalkar/subscriptions",
    "organizations_url": "https://api.github.com/users/Sankalp-Pimpalkar/orgs",
    "repos_url": "https://api.github.com/users/Sankalp-Pimpalkar/repos",
    "events_url": "https://api.github.com/users/Sankalp-Pimpalkar/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sankalp-Pimpalkar/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sankalp Pimpalkar",
    "company": null,
    "blog": "https://sankalp-pimpalkar-zeta.vercel.app/",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "🧑‍🎓 Computer Engineering Student | Frontend Developer",
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 6,
    "following": 4,
    "created_at": "2024-05-19T12:02:24Z",
    "updated_at": "2024-07-19T13:12:30Z"
}

app.get('/', (req, res) => {
    const routes = ['/twitter', '/github', '/instagram', '/login'];
    res.send(`
        <h1>Welcome!</h1>
        <p>Available routes are:</p>
        <ul>
            ${routes.map(route => `<li><a href="${route}">${route}</a></li>`).join('')}
        </ul>
    `);
});

app.get('/twitter', (req, res) => {
    res.send(`
        <h1>Twitter API Endpoint</h1>
        <p>Follow us on <a href="https://x.com/Sankalp2310">Twitter</a></p>
    `);
});

app.get('/instagram', (req, res) => {
    res.send(`
        <h1>Instagram API Endpoint</h1>
        <p>Follow us on <a href="https://www.instagram.com/i.am.sankalp.23/">Instagram</a></p>
    `);
});

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/login', (req, res) => {
    res.send('<h1>You are on login Page</h1>')
})

app.listen(port, () => {
    console.log(`app listening on port http://localhost:${port}`)
})