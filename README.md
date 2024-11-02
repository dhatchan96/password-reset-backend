
# Password Reset Frontend

This project is a **React + Vite** frontend application that provides a user interface for a password reset flow. It includes pages for **Signup**, **Forgot Password**, and **Reset Password**. The app is styled with **Bootstrap** for responsiveness.

## Features

- **Signup**: Allows users to register by entering their first name, last name, email, and password.
- **Forgot Password**: Allows users to request a password reset link by entering their email.
- **Reset Password**: Allows users to set a new password using a token from their email.
- **Navbar**: A Bootstrap-based navigation bar with links to all major pages.

## Tech Stack

- **Frontend**: React, React Router, Axios
- **Styling**: Bootstrap (via CDN)
- **Build Tool**: Vite

## Prerequisites

- **Node.js** and **npm** installed on your machine.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dhatchan96/password-reset-frontend
cd password-reset-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Ensure that the backend server URL is set up correctly in the application code. By default, it assumes the backend runs on `http://localhost:5000`.

### 4. Run the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## Project Structure

```
password-reset-frontend/
├── public/
│   └── index.html         # HTML template with Bootstrap CDN
├── src/
│   ├── components/
│   │   └── Navbar.jsx     # Navbar component with links to all pages
│   ├── pages/
│   │   ├── Signup.jsx     # Signup page
│   │   ├── ForgotPassword.jsx # Forgot Password page
│   │   └── ResetPassword.jsx  # Reset Password page
│   ├── App.jsx            # Main application with routes
│   └── main.jsx           # Application entry point
├── .gitignore
├── package.json
└── README.md
```

## Available Scripts

### `npm run dev`

Runs the app in development mode. Open `http://localhost:5173` to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder. It bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Locally preview the production build.

## Available Routes

- **`/signup`**: Signup page where users can register by providing their first name, last name, email, and password.
- **`/forgot-password`**: Forgot Password page where users can enter their email to receive a password reset link.
- **`/reset-password/:token`**: Reset Password page where users can set a new password using a token from their email.

## API Endpoints

This frontend app expects the following backend API endpoints:

- **POST `/api/auth/signup`**: Registers a new user.
- **POST `/api/auth/forgot-password`**: Requests a password reset link.
- **POST `/api/auth/reset-password/:token`**: Resets the user’s password.

> **Note**: Ensure the backend server is running and configured to allow CORS requests from `http://localhost:5173`.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests to the backend.
- **Bootstrap (via CDN)**: For styling and responsive design.

## Deployment

To deploy the frontend to a static hosting platform:

1. Run the build script:
   ```bash
   npm run build
   ```
2. Deploy the contents of the `dist` folder to your preferred static hosting service, such as **Netlify**, **Vercel**, or **GitHub Pages**.

## License

This project is licensed under the MIT License.
