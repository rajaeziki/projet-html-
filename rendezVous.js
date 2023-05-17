var Users = [
    {
      firstname: "Maj",
      lastname: "abc",
      Email: "maj@gmail.com",
      dateTime: "13-03-2024, 11h"
    },
    {
      firstname: "Raj",
      lastname: "xvf",
      Email: "raj@gmail.com",
      dateTime: "13-06-2024, 14h"
    }
  ];
  function initMap() {
    const geocoder = new google.maps.Geocoder();
    const address = '1600 Amphitheatre Parkway, Mountain View, CA';
    geocoder.geocode({ 'address': address }, function(results, status) {
      if (status === 'OK') {
        const map = new google.maps.Map(document.getElementById('map'), {
          center: results[0].geometry.location,
          zoom: 8
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
function signU(){
    var user={};
    user.firstname=document.getElementById("FN").value;
    user.lastname=document.getElementById("LN").value;
    user.Email=document.getElementById("email").value;
    user.Email=document.getElementById("dateTime").value;
    
    Users.push(user);
    alert("rendez vous taken "+user.lastname+" "+user.firstname);
    console.log(user);
return user;
}
console.log(Users);
var submitBtn = document.querySelector("#subB");
submitBtn.addEventListener("click", signU);

