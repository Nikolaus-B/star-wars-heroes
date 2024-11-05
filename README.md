# Star Wars Character Explorer

This project allows users to interact with the Star Wars universe through an API and a user-friendly interface. The application enables users to browse characters and explore their connections to movies and starships through an interactive flow map.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Redux Toolkit**: For state management.
- **Styled-Components**: For styling the components using tagged template literals.
- **Tailwind CSS**: For utility-first styling approach.
- **React Flow**: For creating and displaying the interactive flow map.
- **Vite**: As the build tool for fast development and optimized production builds.

## API

The application fetches data from the [Star Wars API](https://sw-api.starnavi.io/), which provides information about characters, movies, and starships.

## Main Features

- **Character List**: Display a list of characters retrieved from the API.
- **Interactive Flow Map**:
  - Clicking on a character opens a React Flow map.
  - The main node represents the selected character.
  - From the character node, connections lead to the movies in which the character appears.
  - Each movie node has connections to the starships that the character traveled on.

> [!TIP]
> Getting Started:

- Clone this repository to your local machine.
- Install dependencies using npm install.
- Run the development server with npm run dev.
- Access the application in your browser at http://localhost:5173
