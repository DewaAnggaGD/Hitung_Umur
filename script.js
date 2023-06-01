function calculate () {
    setInterval(() => {
        //input birthdate date
        let birthdate = new Date(document.getElementById('birthdate').value);
        //getTime : returns the number of miliseconds since january 1,1978
        let now = new Date();
        let ageInms = now.getTime() - birthdate.getTime();

        let ageInS = ageInms / 1000; // to seconds
        let ageInMins = ageInS / 60; // to minutes
        let ageInHrs = ageInMins / 60; // to hours
        let ageInDays = ageInHrs / 24; // to days
        let ageInMonths = ageInDays / 30.4375 // to months
        let ageInYears = ageInMonths / 12; // to years

        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#month').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMins % 60);
        document.querySelector('#second').innerHTML = Math.floor(ageInS % 60);
        document.querySelector('#second').style.borderBottom = '1px grey solid';
    }, 1000);
}

function reset () {
    window.location.reload();
}