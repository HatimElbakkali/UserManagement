# User Management

A simple single-page **CRUD application** for managing users, built with **React 19**, **React Router** and **Bootstrap 5**, and bundled with **Vite**.

You can add users, list them in a table, edit their details and delete them. All data lives in React state (in memory), so there is no backend or database. Refreshing the page resets the list.

## Features

- **List users** in a striped Bootstrap table (ID, Full Name, Country, Actions)
- **Add a user** with an auto-incremented ID, a full name and a country
- **Edit a user** (name and country) from a pre-filled form
- **Delete a user** after a confirmation screen
- Client-side routing with no page reloads
- Empty state ("No items") when there are no users

## 🛠️ Built With

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,js,html,bootstrap" alt="Technologies used" />
</p>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended) and npm

### Installation

```bash
# 1. Go to the project folder
cd UserManagement

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open the URL shown in the terminal (usually <http://localhost:5173>).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the project |

## Routes

| Path | Component | Description |
| --- | --- | --- |
| `/` | `UserTable` | List of all users |
| `/users/create` | `UsersAdd` | Form to add a new user |
| `/users/:id/edit` | `UserEdit` | Form to edit an existing user |
| `/users/:id/delete` | `UsersDelet` | Confirmation page to delete a user |

## Project Structure

```
UserManagement/
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx            # App entry point (loads Bootstrap + renders <App />)
    ├── App.jsx             # Root component (Bootstrap container)
    └── users/
        ├── UserApp.jsx     # Users state + Context provider (add / update / delete)
        ├── UsersLayout.jsx # Router, navigation bar and routes
        ├── UserTable.jsx   # Users list
        ├── UsersAdd.jsx    # Add user form
        ├── UserEdit.jsx    # Edit user form
        └── UsersDelet.jsx  # Delete confirmation
```

## How It Works

State management is done with **React Context** (`UsersContext`) defined in `UserApp.jsx`:

- `users`: array of user objects `{ id, FullName, country }`
- `lastId`: counter used to generate the next ID
- `actions`: `addUser`, `updateUser` and `deletUser`

`UserApp` holds the state with `useState` and exposes it through the context provider. Every page (`UserTable`, `UsersAdd`, `UserEdit`, `UsersDelet`) reads the context with `useContext` and calls the matching action. After an update or a delete, the app goes back to the previous page with `window.history.back()`.

## Possible Improvements

- Persist data (localStorage or a REST API / database)
- Form validation (required name, valid country)
- Fix typos in the code (`Morocoo`, `Tunsian`, `Algerien`, `UsersDelet`, `deletUser`) and in the delete page text
- Add search, sorting and pagination to the table
- Add unit tests

## License

This project is for learning purposes. Add a license of your choice if you plan to share it.