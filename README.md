# Cake Store Mobile Application

## Overview
The Cake Store Mobile App is an intuitive platform designed for customers to browse, order, and manage their favorite cakes effortlessly. Built with React Native and TypeScript, the app offers a seamless shopping experience, featuring secure authentication, order tracking, and an interactive UI for both Android  users. The backend, developed using Node.js and Express, ensures efficient order processing and data management with MySQL and Prisma ORM.

## Features
- **User Authentication**: Secure login and sign-up using JWT authentication.
- **Cake Catalog**: Browse a variety of cakes with images, descriptions, and prices.
- **Order Management**: Add cakes to the cart, place orders, and track order status.
- **Customer Profile**: Manage personal details like name, address, and contact number.
- **Cart Functionality**: Add,  remove items before checkout.
- **Responsive UI**: Optimized for Android devices.
- **Backend API**: Built with Node.js, Express, and Prisma ORM for seamless data handling.

## Tech Stack
- **Frontend**: React Native, TypeScript, Redux for state management
- **Backend**: Node.js, Express, Prisma ORM
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token)


## Installation
### Prerequisites
- Install Node.js (LTS version) along with npm or Yarn.
- Install Expo CLI globally for React Native development.
- MySQL server setup for database management.

### Clone the Repository
#### Frontend:
```
git clone https://github.com/amashamaduwanthi/Cake-Store-front-End-Mobile-Application.git

```
#### Backend:
```
git clone https://github.com/amashamaduwanthi/Mobile-App-Backend.git

```

### Running the Application
#### Backend:
1. Configure your MySQL database in the `.env` file.
2. Run database migrations with Prisma:
   ```
   npx prisma migrate dev
   ```
3. Start the backend server:
   ```
   npm start
   ```

#### Frontend:
1. Start the Expo development server:
   ```
   npm expo start
   ```
2. Use an Android simulator or Expo Go to preview the app.


