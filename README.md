A restaurant's existing reservations can be tracked with this app. The app will show all reservations for today, and you can use the option to view reservations for upcoming dates. It offers an easy-to-use user interface for adding new tables and making changes to reservations. Users can utilize the search interface on their mobile device to look up all reservations, whether recent and old.

Live demo: [Link]()


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


<<<<<<< HEAD
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
#### Dashboard:

![Dashboard screenshot](screenshots/Dashboard.png)

#### Create a New Reservation:

![Create-a-New-Reservation](screenshots/Create_new_reservation.png)

#### After Create a New Reservation:

![After Create a New Reservation](screenshots/Dashboard_after_new_reservation_created.png)

#### Create a New Table:

![Create-a-New-Table](screenshots/create_table.png)

#### Seat a Reservation:

![Seat-a-Reservation](screenshots/seat_a_reservation.png)

#### Finish an Occupied Table:

![Finish-an-Occupied-Table](screenshots/finish_button.png)

#### Cancel a Reservation:

![Cancel-a-Reservation](screenshots/cancel_button.png)

#### Edit a Reservation:

![Edit-a-Reservation](screenshots/edit_reservation.png)
