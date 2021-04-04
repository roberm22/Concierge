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
			"photo": {
				"filename": "pepe.jpg"
			}
		},
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
			"photo": {
				"filename": null
			}
		},
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
