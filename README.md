This app is for restaurants. Users can create, update, view, delete reservations, as well as seat them at varius tables within the restaurant. An existing reservations can be tracked with this app. The app will show all reservations for today, and user able to view upcoming and previous date's reservations. User can adding new tables and seat a reservatio. Users can look up reservations by using the search function to look up customer's phone number.

# Restaurant Reservation App
Live site:


## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your database instances.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5000`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode if you wish to make changes.
1. When pushing to your deployed app be sure to make use of the git subtree push --prefix <file> console command. This is important because this respository is a monorepo containing both front and back end.
1. After deploying with your chosen host be sure to set your `env` files up in your back-end and front-end.  


## Technology

* HTML
* CSS
* React
* Javascript
* Node.js
* Express
* Knex  
* Postgres 

## Screenshots: 
![Dashboard](Dashboard.png)
![Create-Res-before](Create-Res-before.png)
![Create-res-after](Create-res-after.png)
![Create-table-before](Create-table-before.png)
![Create-table-after](Create-table-after.png)
![Search-phone-num](Search-phone-num.png)
![Cancel-res](Cancel-res.png)
