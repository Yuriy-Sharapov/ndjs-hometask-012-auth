const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

    // req.user = {
    //     id: 1,
    //     username: 'user',
    //     password: '123456',
    //     displayName: 'demo user',
    //     emails: [{ value: 'user@mail.ru' }],
    //   }

    console.log(req.user)

    res.render('home', {
        title: 'Главная',
        user: req.user
    })
})

module.exports = router