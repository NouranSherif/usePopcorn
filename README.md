# usePopcorn

A movie search and watch-list app built with React, from **Jonas Schmedtmann's** *The Ultimate React Course*. It lets you search movies from the OMDb API, view details, rate them, and keep track of the movies you've watched.

## Features

- **Live movie search** against the OMDb API as you type
- **Movie details view** – plot, cast, director, genre, runtime, and IMDb rating
- **Interactive star rating** (1–10) when adding a movie to your watched list
- **Watched list & summary** – total movies, average IMDb / user rating, and average runtime
- **Remove movies** from your watched list
- **Persistent storage** – watched movies are saved to `localStorage`
- **Keyboard shortcuts** – press `Escape` to close the movie details
- **Fully responsive** across desktop, tablet, and mobile

## Tech Stack

- **React 18** – function components and hooks
- **Hooks** – `useState`, `useEffect`, `useRef`, and custom hooks (`useMovies`, `useLocalStorageState`, `useKey`)
- **OMDb API** – movie data source via `fetch`
- **CSS** – global stylesheet with custom properties and media queries
- Built with **Create React App**

## Course Attribution

This project is part of **Jonas Schmedtmann's** *[The Ultimate React Course 2024: React, Next.js, Context, Redux](https://www.udemy.com/course/the-ultimate-react-course/)* on Udemy.

## Credits

This project was built as part of the React course by Jonas Schmedtmann.

## What I Learned

- Managing state with React Hooks
- Using useEffect for data fetching
- Working with external APIs
- Creating custom hooks
- Handling loading and error states
- Managing keyboard events
- Working with refs using useRef
- Building reusable React components
- Structuring a React application
