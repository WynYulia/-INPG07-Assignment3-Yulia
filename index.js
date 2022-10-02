const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': ''
	}
};

var buttonBtn = document.getElementById('btn1')
buttonBtn.addEventListener('click', function(event) {  
    event.preventDefault()
    var country = document.getElementById("btn").value
    fetch(`https://covid-193.p.rapidapi.com/history?country=${country}`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            document.getElementById('active-cases').innerHTML = response.response[0].cases.active
            document.getElementById('new-cases').innerHTML = response.response[0].cases.new
            document.getElementById('recovered-cases').innerHTML = response.response[0].cases.recovered
            document.getElementById('total-cases').innerHTML = response.response[0].cases.total
            document.getElementById('total-deaths').innerHTML = response.response[0].deaths.total
            document.getElementById('total-tests').innerHTML = response.response[0].tests.total
        })
        .catch(err => console.error(err));
}) 





