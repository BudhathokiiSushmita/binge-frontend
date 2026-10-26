# Binge Frontend

React frontend for **Binge**, an OTT (streaming platform) clone. Users can browse movies and TV shows, view details, search, and sign up or log in.

Backend repository: [binge-backend](https://github.com/BudhathokiiSushmita/binge-backend)

Live demo: [binge-frontend-kappa.vercel.app](https://binge-frontend-kappa.vercel.app). The backend runs on a free Render instance, so the first load after a period of inactivity can take about a minute.

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

## Author

Sushmita Budhathoki