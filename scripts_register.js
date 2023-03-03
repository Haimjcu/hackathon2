const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const pwd = document.getElementById('pwd');
const email = document.getElementById('email');
const type = document.getElementById('type');
const entityname = document.getElementById('entityname');
const website = document.getElementById('website');
const typeofmusic = document.getElementById('typeofmusic');
const address = document.getElementById('address');
const newaccount = document.getElementById('newaccount');

newaccount.addEventListener('click', (event) => {
    event.preventDefault();
    let entityurl= entityname.replace(/\s+/g,'');
    let payload = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: pwd.value,
        type: type.value,
        entityname: entityname.value,
        entityurl: entityurl,
        website: website.value,
        typeofmusic: typeofmusic.value,
        address: address.value,
        created_on: Date.now()
    }
    fetch('http://localhost:3000/newaccount', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     
        },
        body: JSON.stringify(payload)
    })
    .catch(err => {
      console.log(err);
    })

})
