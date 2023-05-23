# React_Django_E-commerce

This project is an e-commerce application built as a practice during the React and Django courses at ITI. It is a team project focused on creating a fully functional e-commerce website.

## Demo

Check out the [demo video](https://drive.google.com/file/d/132Ajw-SO8KvOcGo4eAabtKhyeN1XCZOe/view) to see the project in action.

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- Python
- Django

## Backend Repository

For instructions on running the Django server and setting up the required webhook for payment, please refer to the [backend repository](https://github.com/MohammedFarhoud/e-commerce-django-backend).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alielzoghby/React---Project
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the Django server for the backend (make sure you have the Django repository cloned and set up separately):

   ```bash
   python manage.py runserver
   ```

   > **Note:** To run the backend server and set up the required webhook for payment, please refer to the instructions in the backend repository.

4. Start the React development server:

   ```bash
   npm start
   ```

## Features

- Authentication and handling of refresh tokens for secure user access.
- Wishlist functionality to save desired products.
- Cart functionality for managing selected items.
- Order tracking to monitor the status of placed orders.
- Payment integration using the Stripe API.

## Tools

- Redux Toolkit: Efficiently manage state using Redux Toolkit.
- Protected Routes: Implement protected routes to ensure secure access to specific parts of the application.
- Redux Async Thunk: Handle asynchronous actions with Redux Async Thunk middleware.
- Formik: Simplify form handling and validation using Formik.
- Yup: Utilize Yup for form validation.

## Usage

Once the project is set up and running, you can access it by opening your browser and navigating to `http://localhost:3000/`. It is important to note that the backend functionality relies on the Django server, so ensure that it is running as well. Additionally, for seamless payment processing, make sure to have the webhook mentioned in the backend repository up and running.

## Team Members

- [Adel Abdellatif](https://github.com/THEPEACEMAKER) - [LinkedIn](https://www.linkedin.com/in/adel-a-abdelkader/)
- [Ali Elzoghby](https://github.com/alielzoghby) - [LinkedIn](https://www.linkedin.com/in/ali-sahmed/)
- [Mohammed Farhoud](https://github.com/MohammedFarhoud) - [LinkedIn](https://www.linkedin.com/in/mohammed-a-farhoud/)
- [Mahmoud Awd](https://github.com/Mahmoudawd4) - [LinkedIn](https://www.linkedin.com/in/mahmoud-awd-5a2490174/)
