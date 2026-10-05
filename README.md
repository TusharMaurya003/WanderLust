# WanderLust

A full-stack travel listing web application where users can discover, create, update, and review travel destinations.

## Features

* User registration and login
* Secure authentication using Passport.js
* Create, edit, and delete travel listings
* Upload listing images
* View detailed listing information
* Add and delete reviews
* Star rating system
* Map integration using Mapbox
* Location-based listing display
* Flash messages for user feedback
* Authorization for listing owners
* Responsive user interface

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* EJS
* Bootstrap

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* Passport.js
* Passport Local Mongoose
* Express Session

### APIs & Services

* Mapbox
* Cloudinary

### Other Tools

* Git
* GitHub
* Method Override
* Joi
* EJS Mate

## Project Structure

```text
WanderLust/
│
├── controllers/
├── models/
├── routes/
├── views/
├── public/
│   ├── css/
│   └── js/
├── init/
├── utils/
├── app.js
├── middleware.js
├── schema.js
├── cloudConfig.js
├── package.json
└── .gitignore
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/TusharMaurya003/WanderLust.git
```

### 2. Navigate to the project

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root and add your own environment variables.

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
MAP_TOKEN=your_mapbox_token
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

**Never commit your `.env` file or API keys to GitHub.**

### 5. Start the application

```bash
node app.js
```

Or, if you have a development script configured:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:8080
```

## Database

The application uses MongoDB to store:

* User information
* Listing information
* Reviews
* Listing ownership and relationships

## Authentication & Authorization

WanderLust uses Passport.js for user authentication.

Users can:

* Sign up
* Log in
* Log out
* Create listings
* Edit their own listings
* Delete their own listings
* Add reviews

Authorization middleware prevents users from modifying listings they do not own.

## Future Improvements

* Search and filter functionality
* Advanced location-based search
* User profile pages
* Favorites/wishlist
* Booking functionality
* Improved
