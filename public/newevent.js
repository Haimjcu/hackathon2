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
    const select = document.getElementById('band');
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
    const select = document.getElementById('venue');
    const html = arr.map(venues => {
        let newOption = new Option(venues.entityname,venues.account_id);
        select.add(newOption,undefined);
    })
  }

const register = (e) => {
    e.preventDefault();
    const band_id = e.target.band.value;
    const venue_id = e.target.venue.value;
    const eventdate = e.target.eventdate.value;
    const today = new Date().toISOString().slice(0, 10);
    let payload = {
        band_id: band_id,
        venue_id: venue_id,
        eventdate: eventdate,
        created_on: today
    }
    fetch('http://localhost:3000/createevent', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify(payload)
    })
    .then (res => window.location.replace("http://localhost:3000/"))
    .catch(err => {
      console.log(err);
    })

}
