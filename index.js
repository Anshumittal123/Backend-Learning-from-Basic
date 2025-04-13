require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const githubData = {
    "login": "Anshumittal123",
    "id": 122861148,
    "node_id": "U_kgDOB1K2XA",
    "avatar_url": "https://avatars.githubusercontent.com/u/122861148?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Anshumittal123",
    "html_url": "https://github.com/Anshumittal123",
    "followers_url": "https://api.github.com/users/Anshumittal123/followers",
    "following_url": "https://api.github.com/users/Anshumittal123/following{/other_user}",
    "gists_url": "https://api.github.com/users/Anshumittal123/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Anshumittal123/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Anshumittal123/subscriptions",
    "organizations_url": "https://api.github.com/users/Anshumittal123/orgs",
    "repos_url": "https://api.github.com/users/Anshumittal123/repos",
    "events_url": "https://api.github.com/users/Anshumittal123/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Anshumittal123/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Anshu Mittal ",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 27,
    "public_gists": 0,
    "followers": 4,
    "following": 32,
    "created_at": "2023-01-17T07:10:43Z",
    "updated_at": "2025-04-09T06:22:18Z"
  }

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/twitter', (req, res)=>{
    res.send('anshudotcom');
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login at chai aur code.</h1>')
})

app.get('/youtube', (req, res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.get('/github', (req, res)=>{
    res.json(githubData);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
}) 