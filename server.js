const express = require('express');
const cors = require('cors')
const db = require('./dbaccess')
const server = express();

server.use(express.json());
server.use(cors())

server.get('/recipes', (req, res) => {
    db.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: "look, we aren't happy about this either" })
        })
})

server.get('/recipes/:id/shoppingList', (req, res) => {
    db.getShoppingList(req.params.id)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: "look, we aren't happy about this either" })
        })
})
server.get('/recipes/:id/instructions', (req, res) => {
    db.getInstructions(req.params.id)
        .then(stuff => {
            if (stuff) { res.status(200).json(stuff) }
            else {
                res.status(404).json({err: "we aint got that"})
            }
        })
})

module.exports = server;