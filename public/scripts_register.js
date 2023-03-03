const register = (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastname = e.target.lastname.value;
    const password = e.target.pwd.value;
    const email = e.target.email.value;
    const type = e.target.type.value;
    const entityname = e.target.entityname.value;
    const website = e.target.website.value;
    const typeofmusic = e.target.typeofmusic.value;
    const address = e.target.address.value;
    const today = new Date().toISOString().slice(0, 10);
    console.log('haim'+firstname);
    let entityurl= entityname.replace(/\s+/g,'');
    let payload = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        type: type,
        entityname: entityname,
        entityurl: entityurl,
        website: website,
        typeofmusic: typeofmusic,
        address: address,
        created_on: today
    }
    fetch('http://localhost:3000/newaccount', {
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
