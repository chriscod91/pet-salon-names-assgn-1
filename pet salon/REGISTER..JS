const salon={
    name:"the fashion pet",
    address:{
        street:"av. university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[
        {
            petName:"scooby",
            petAge:50,
            petGender:"male",
            petBreed:"dane",
            service:"grooming",
            ownerName:"shaggy",
            contactPhone:"555-555-5555"
        },
        {
            petName:"scrappy",
            petAge:40,
            petGender:"male",
            petBreed:"dane",
            service:"full service",
            ownerName:"shaggy",
            contactPhone:"555-555-5555"   
        },
        {
            petName:"speedy",
            petAge:60,
            petGender:"male",
            petBreed:"mixed",
            service:"nails cut",
            ownerName:"bugs bunny",
            contactPhone:"888-888-8888"
        }
    ]
}

var {name,address:{street,number}}=salon;

document.getElementById('footer-info').innerHTML=`
<p> ${name} ${street} ${number} </p>`;


function displaytext(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);

      document.getElementById('salon.pets').innerHTML+=`<p> ${salon.pets[i].petName} </p>`;
      
    }
} 

