# Stack Tag Navigator

This project is a React-based user interface that displays StackOverflow tags retrieved from the StackOverflow API. It features a paginated table of tags alongside the number of related posts for each tag. The interface allows users to configure the number of items per page, choose the sorting field and direction, and handle loading states and errors. The project utilizes Material-UI for UI components, employs state management by React Query, and includes a Storybook for showcasing the components.

## Features

- **Paginated Table**: Displays StackOverflow tags with the count of related posts.
- **Configurable Items Per Page**: Users can set the number of tags displayed per page.
- **Sorting**: UI elements allow for sorting by field and direction.
- **Loading and Error States**: Proper handling and feedback for data fetching states.
- **UI Library**: Utilizes Material-UI for sleek and responsive components.
- **State Management and Data Fetching**: Leverages libraries like Redux or React Query for efficient data handling.
- **Storybook Integration**: Components are documented and showcased in Storybook for easier component management and testing.

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:
git clone https://github.com/Dominiq01/stack-tag-navigator.git

2. Install the dependencies using npm:
npm ci


## Running the Application

To start the application, run the following command in the project directory:
npm start

This will launch the application on `http://localhost:3000/` by default.

## Running Storybook

To view the project's components in Storybook, run:
npm run storybook

Storybook will start, and you can browse the components at `http://localhost:6006/`.

## Acknowledgments

- StackOverflow API for providing the data used in this project.
- Material-UI for the beautiful set of react components.
- The React community for continuous support and resources.
