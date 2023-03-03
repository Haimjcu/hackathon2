const viewBand = document.getElementById('viewBand');
const viewVenue = document.getElementById('viewVenue');

const getBandList = () =>{
    fetch('/getallbands')
    .then(res => res.json())
    .then(data=> {
      showBandList(data);
    })
    .catch(err => {
      console.log(err);
    })
}

getBandList();

const showBandList = (arr) => {
    const select = document.getElementById('bandList');
    const html = arr.map(bands => {
        let newOption = new Option(bands.entityname,bands.account_id);
        select.add(newOption,undefined);
    })
  }

  const getVenueList = () =>{
    fetch('/getallvenues')
    .then(res => res.json())
    .then(data=> {
      showVenueList(data);
    })
    .catch(err => {
      console.log(err);
    })
}

getVenueList();

const showVenueList = (arr) => {
    const select = document.getElementById('venueList');
    const html = arr.map(venues => {
        let newOption = new Option(venues.entityname,venues.account_id);
        select.add(newOption,undefined);
    })
  }



  const getTodaysEvents = () =>{
    fetch('/gettodaysevents')
    .then(res => res.json())
    .then(data=> {
      showTodaysEvents(data);
    })
    .catch(err => {
      console.log(err);
    })
}

getTodaysEvents();

const showTodaysEvents = (arr) => {
    const html = arr.map(events => {
        return `<div><div id="bandName">${events.band}</div>
        <div id="atthe">@</div>
        <div id="venueName">${events.venue}</div></div>`
    })
    document.getElementById('events').innerHTML = html.join('')
  }

  viewBand.addEventListener('click', (e) => {
    window.location.replace(`/account/${document.getElementById('bandList').value}`);
  })

  viewVenue.addEventListener('click', (e) => {
    window.location.replace(`/account/${document.getElementById('venueList').value}`);
  })