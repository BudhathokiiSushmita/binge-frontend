# Binge Frontend

React frontend for **Binge**, an OTT (streaming platform) clone. Users can browse movies and TV shows, view details, search, and sign up or log in.

Backend repository: [binge-backend](https://github.com/BudhathokiiSushmita/binge-backend)

Live demo: _coming soon_

## Features

- Home page with a hero carousel, featured movies and featured TV shows
- Movies and TV Shows pages
- Details page for each title
- Content search
- User signup, login and dashboard
- Responsive layout built with React Bootstrap

## Tech Stack

- React 18 (Create React App)
- React Router 6
- React Bootstrap and Bootstrap 5
- React Icons
- React Modal
- Fetch API for REST calls to the Spring Boot backend

## Project Structure

```
src/
├── component/
│   ├── Common/        Reusable carousel and grid components
│   └── pages/         Home, movies, TV shows, details, login, signup, dashboard
├── service/           API calls (ContentService.js, UserService.js)
├── images/            Static images
└── index.js
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- The [Binge backend](https://github.com/BudhathokiiSushmita/binge-backend) running, locally or deployed

### Install and run

```bash
npm install
npm start
```

The app opens at `http://localhost:3000`.

### Connect to the backend

The backend address is set as `API_URL` at the top of two files:

- `src/service/ContentService.js`
- `src/service/UserService.js`

To use a backend running on your computer, set them to `http://localhost:8080/content` and `http://localhost:8080/user`.

### Build for production

```bash
npm run build
```

## Deployment

The frontend is designed to be deployed on [Vercel](https://vercel.com).

## Author

Sushmita Budhathoki