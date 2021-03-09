exports.clients = [
	{
		"id": 1,
		"room": 220,
		"DNI": "94342812D",
		"profile": {
			"name": "Pepe",
			"username": "p",
			"password": "1234",
			"email": "pepito88@gmail.com",
			"phone": 628496873,
			"photo": {
				"filename": "pepe.jpg"
			}
		},
		"isVip": true
	},
	{
		"id": 2,
		"room": 320,
		"DNI": "32297678C",
		"profile": {
			"name": "Juan",
			"username": "j",
			"password": "1234",
			"email": "juanito99@gmail.com",
			"phone": 659432990,
			"photo": {
				"filename": "juan.jpg"
			}
		},
		"isVip": false
	}

]

exports.login =
	{
		"id": 0,
		"status": "info",
		"isLogged": false,
		"userAnswer": "",
		"passwordAnswer": "",
		"attempts": 0,
		"userDNI": "",
		"roomAnswer": ""
	}
