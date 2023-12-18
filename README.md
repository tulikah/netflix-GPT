# Netflix GPT App
 - Scaffolded create-react-app
 - Configured Tailwindcss
 - Header
 - Login form
 - Form Validation
 - useRef hook
 - Setup firebase
 - Deploy app hosted on firebase 
 - Authentication
 - Create sign up user account
 - Created redux store and slice
 - Sign In Sign Out with login profile
 - Logic for adding, updating, removing user
 - Start with browse page
 - Bugfix: Sign up your display name and profile picture update
    - Update the store (dispatch actions) inside the Login component in the Sign Up method
 - Redirect to /browse if user is already logged in and registered, if not redirect to /login
    - Bugfix: You cannot call main route inside the same component where you decared the router.
        - Add your main logic in the Header since the header component is present everywhere in the app.
        - Or move the router setup to a different component
 - onAuthStateChanged() is in the header that runs only once but the header component renders many times. So we need to unsubscribe the hook. This also acts as an event listener.
 - Constants file -> add all hardcoded values
 - Register TMDB API and create an app -> get access to the key token
 - Get data from the TMDB movies list API (Movies List => Now Playing in API Reference Tab)
 - Created a custom hook to get all movies instead of calling in Browse component
 - Fetched all the now playing movies using a custom hook
 - Used TMDB to get list  of youtube videos (Under movies => vidoes)
 - Get the data which has "type" as "Trailer"
 - Add a new reducer in the movie slice to store the trailer info
 - Get the iframe of youtube video
 - Save the trailer info in the store. Subscribe to the store to get the trailer id and display the video
 - Using aspect video in css to make the trailer screen size
 - Embedd video and autoplay it
 - Tailwind classes to make main-container look amazing


# Features
 - Log In/Sign UP 
    - Sign Up form
    - Redirect to browser page
  - Browse page design:
    - Header
        - Logo
        - Sign in button
        - Account info
    - MainContainer
        - BackgroundVideo
                - Two Buttons
                - VideoTitle
    - MoviesListContainer
        - CategoryContainer * n
            - MovieCard * n
 - Netflix GPT
    - Search Bar
    - Movie Suggestions List


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

- Start the server on development mode [http://localhost:3000](http://localhost:3000) 

### `npm start`

- Test the app

### `npm test`

- Build the server
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
