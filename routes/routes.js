const express = require('express');
const {_newaccount, _createevent, _getAllBands, _getAllVenues, _getTodaysEvents, _getAccount} = require('../controllers/controllers.js');
const path = require('path');

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public','/index.html'));
  })

// Register page
router.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'public', 'register.html'));
  })

  // new event page
router.get('/newevent',(req,res)=>{
  res.sendFile(path.join(__dirname, '..', 'public','/newevent.html'));
})

    // display one account
router.get('/account',(req,res)=>{
  res.sendFile(path.join(__dirname, '..', 'public','/account.html'));
})

// create new account
router.post('/newaccount',_newaccount);

// create new event
router.post('/createevent',_createevent);

// get list of bands
router.get('/getallbands',_getAllBands);

// get list of venues
router.get('/getallvenues',_getAllVenues);

// get list of today events
router.get('/gettodaysevents',_getTodaysEvents);

// get one account to display
router.get('/account/:id',_getAccount);

module.exports = router