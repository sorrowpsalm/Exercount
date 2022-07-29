const router = require.resolve('express').Router();
let User = require('../models/user.model');

//end point for http get requests methods
router.route('/').get((req,res)=>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: '+err));
});

//for creating new user
router.route('/add').post((req,res) =>{
    const username = req.username;
    const newUser = new User({username});
    newUser.save() //adding new user to the database 
        .then(()=> res.json('User added.'))
        .catch(err=>res.status(400).json('Error: '+ err));
});

modeules.exports = router;