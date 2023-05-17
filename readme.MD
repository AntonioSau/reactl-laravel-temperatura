Parte 1. Backend
Andare nella directory Laravel e 

	cd laravel

Montare l'immagine di Laravel, nginx e mysql

	docker-compose build

Se il file vendor non è presente usare il comando

	composer install

Lanciare l'immagine 

	docker compose up -d

Copiare il file .env.example in .env
Eseguire i seguenti comandi:

	docker-compose exec app php artisan key:generate
	docker-compose exec app php artisan config:cache
 	docker-compose exec app php artisan migrate
	
	docker-compose exec app php artisan migrate
 	docker-compose exec app php artisan db:seed

N.B. Se ricevete un errore relativo a permessi di scrittura/append sul file laravel.log eseuguite il seguente comando

		sudo chmod u+w /var/www/html/storage/logs/laravel.log


Parte 2. Frontend

Andare nella directory App e 

	cd app

Montare l'immagine con l'istruzione

	docker build -t react .

Lanciare l'immagine di React con il comando

	docker run -p 8080:80 -v ./app react

Se non è presente node_modules fare

	npm install


il risultato del comando docker-ps dovrebbe essere una cosa del genere

CONTAINER ID   IMAGE                 COMMAND                  CREATED             STATUS          PORTS                                                  NAMES
238e0c62e3bf   react                 "/docker-entrypoint.…"   51 seconds ago      Up 51 seconds   8080/tcp, 0.0.0.0:8080->80/tcp, :::8080->80/tcp        objective_bartik
348fe4054b4c   hakase-labs/laravel   "docker-php-entrypoi…"   About an hour ago   Up 22 minutes   9000/tcp                                               app
ecd5981847fa   nginx:alpine          "/docker-entrypoint.…"   2 hours ago         Up 22 minutes   0.0.0.0:80->80/tcp, :::80->80/tcp                      nginx
91e3e483cbf6   mysql:5.7             "docker-entrypoint.s…"   2 hours ago         Up 22 minutes   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   db

	
