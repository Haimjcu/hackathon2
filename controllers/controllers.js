const {newaccount, createevent, getAllBands, getAllVenues, getTodaysEvents, getAccount, accountEvents} = require('../modules/modules.js');

const _newaccount = (req,res) => {
    newaccount(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
}

const _createevent = (req,res) => {
    createevent(req.body)
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        console.log(err);
    })
}

const _getAllBands = (req, res) => {
    getAllBands()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({msg:err.message})
    })
  }

  const _getAllVenues = (req, res) => {
    getAllVenues()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({msg:err.message})
    })
  }

  const _getTodaysEvents = (req, res) => {
    getTodaysEvents()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({msg:err.message})
    })
  }

  const showAccountEvents = (arr) => {
    const html = arr.map(events => {
        return `<div><div id="bandName">${events.band}</div>
        <div id="atthe">@</div>
        <div id="venueName">${events.venue}</div><div id="venueName">${events.eventdate}</div></div>`
    })
    return html.join('');
  }

  const _getAccount = (req,res) => {
    let eventsHtml="";
    accountEvents(req.params.id)
    .then(data => {
        const arr = [...data];
        eventsHtml = showAccountEvents(arr);
   
        getAccount(parseInt(req.params.id))
        .then(data => {    
            const [obj] = data;
            const {entityname, website, typeofmusic,address} = obj;
            html = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="../style.css">
                <title>Band and Venue Guide</title>
            </head>
            <body>
                <nav>
                    <div class="logo"><a href="http://localhost:3000/"><img src="../images/logo.png" alt=""></a></div>
                    <ul id="navlist">
                        <li><a href="http://localhost:3000/newevent">New Event</a></li>
                        <li><a href="http://localhost:3000/register">Register</a></li>
                        <li><a href="http://localhost:3000/login">Login</a></li>
                    </ul>
                </nav>
                <section id="register">
                    <h1>${entityname}</h1>
                    <div id="website">Website: ${website}</div>
                    <div id="music">Type of Music: ${typeofmusic}</div>
                    <div id="address"> Address: ${address}</div>
                    </div>
                </section>
                <section id="todaysEvents">
                    <h1>Upcoming Events</h1>
                    <div id="events">${eventsHtml}</div>
                </section>
            </body>
            </html>`
            res.setHeader("Content-Type", "text/html")
            res.send(html)
        })
    .catch(err => {
        console.log(err);
    })

})
.catch(err => {
  console.log(err);
  //res.status(404).json({msg:err.message})
})
}

module.exports  = {_newaccount, _createevent, _getAllBands, _getAllVenues, _getTodaysEvents, _getAccount }