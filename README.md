# SET Coffee - فروشگاه اینترنتی قهوه ست

SET Coffee is a comprehensive e-commerce platform designed for coffee enthusiasts. It features a robust backend powered by MongoDB and Mongoose, and a modern frontend built with Next.js, React, and TailwindCSS. The platform supports both user and admin panels, offering extensive functionality and a luxurious design.

## Features

### General Features
- **Responsive Design**: Fully responsive and mobile-friendly design.
- **Authentication**: JWT-based authentication with signup, signin, and signout features.
- **Notifications**: User-friendly notifications using `react-toastify`.

### User Panel
- **Wishlist**: View and manage your favorite coffee products.
- **Orders**: Track recent and past orders.
- **Comments**: View and manage your comments on products.
- **Tickets**: Submit tickets to admins and track their status.
- **Account Management**: Update account details including username, password, and full name.

### Admin Panel
- **Dashboard**: Overview of key metrics such as tickets, products, orders, and users.
- **Product Management**: Add, update, and delete products.
- **User Management**: Ban, change role, delete, and update users.
- **Order Management**: View and manage all orders.
- **Comment Management**: View and manage comments on products.
- **Ticket Management**: View and respond to user tickets.
- **Discount Management**: Add and manage discounts.
- **Charts and Reports**: View sales statistics and growth rates using charts.

## Installation

### Prerequisites
- Node.js
- MongoDB

### Setup
1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/your-username/set-coffee.git
   cd set-coffee
   ```
2. **Install dependencies:**

  ```bash
   npm install
   ```

3. **SetUp MongoDb :**

- Ensure MongoDB is installed and running on your local machine.

4. **Run the Project :**

   ```bash
   npm run dev

   ```

# Project Structure : 

- public/
- src/
  - components/
    - layouts/
    - modules/
    - templates/
  - pages/
  - styles/
  - utils/
- .env
- package.json
- README.md

  # Key Routes :

  # FrontEnd :

/about-us

/blog

/cart

/contact-us

/login-register

/p-admin

/p-user

/products/[id]

/rules

/wishlist

# Api Routes : 

/api/auth

/api/auth/me

/api/auth/refresh

/api/auth/signin

/api/auth/signup

/api/auth/signout

/api/auth/sms

/api/blogs

/api/comments

/api/contactus

/api/departments

/api/discounts

/api/products

/api/products/wishlist

/api/tickets

/api/user

/api/user/ban

/api/user/change-role

/api/user/delete

/api/user/update

# Technologies Used 

# FrontEnd :

React

Next.js

TailwindCSS

Swiper

AOS (Animate On Scroll)

React Icons

Emotion for styled components

# BackEnd :

Node.js

Express.js

MongoDB

Mongoose

JWT for authentication

SweetAlert2 for alerts

React Toastify for notifications
