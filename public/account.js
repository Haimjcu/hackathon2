const getBandList = () =>{
    fetch(`/getaccount/${id}`)
    .then(res => res.json())
    .then(data=> {
      showBandList(data);
    })
    .catch(err => {
      console.log(err);
    })
}