# Food Delivery App

## Overview
This project is a food delivery application built using the MERN stack (MongoDB, Express, React, Node.js). It features user authentication with login and signup functionality, a home page with a navigation bar, header, footer, and a Google Maps integration for tracking delivery locations.

## Features
- User authentication (signup and login)
- Home page with navigation, header, footer, and map
- Live location tracking for delivery personnel using Google Maps
- Responsive design similar to popular food delivery services

## Technologies Used
- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Mapping**: Google Maps API

## Project Structure
```
food-delivery-app
├── admin
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   
│   │   │   
│   │   │   
│   │   ├── pages
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   └── SignupPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
├── backend
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── userModel.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── config
│   │   └── db.js
│   ├── server.js
│   └── package.json
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Map.js
│   │   ├── pages
│   │   │   ├── HomePage.js
│   │   │   ├── LoginPage.js
│   │   │   └── SignupPage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
├── README.md
└── .gitignore
```

## Setup Instructions

### Backend
1. Navigate to the `backend` directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your MongoDB connection in `config/db.js`.
4. Start the server:
   ```
   npm run dev
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React application:
   ```
   npm run dev 
   ```
### abmin
1. Navigate to the `abmin` directory:
   ```
   cd abmin
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm run dev
   ```
## Contributing
Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License
This project is licensed under the MIT License.
