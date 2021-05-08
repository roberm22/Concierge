exports.clients = [
	{
		"id": 1,
		"room": "200",
		"DNI": "12345678A",
		"profile": {
			"name": "Pepe",
			"email": "pepito88@gmail.com",
			"phone": 628496873,
			"points":1000,
			"bill":30
		},
		"stay": "19 Apr - 10 May",
		"tierVIP": 3
	},
	{
		"id": 2,
		"room": "300",
		"DNI": "87654321B",
		"profile": {
			"name": "Juan",
			"email": "juanito99@gmail.com",
			"phone": 659432990,
			"points":10,
			"bill":15
		},
		"stay": "7 Apr - 19 Jun",
		"tierVIP": 2
	},
	{
		"id": 3,
		"room": "0",
		"DNI": "0",
		"profile": {
			"name": "ADMIN",
			"email": "ADMIN@gmail.com",
			"phone": 0,
			"points":99999,
			"bill":0
		},
		"stay": "7 Mar - 21 Jun",
		"tierVIP": 1
	}

]

exports.login =
	{
		"id": 0,
		"status": "info",
		"isLogged": false,
		"conditionsAccepted":false,
		"dniAnswer": "",
		"roomAnswer": "",
		"attempts": 0
	}
