# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Online Library System

An interactive and user-friendly online library system built using **React**, **Redux**, **Vite**, and **Tailwind CSS**. This application allows users to browse, search, and add books dynamically.

---

## Features

1. **Home Page**:
   - Welcome message and categories list (e.g., Fiction, Non-Fiction, Sci-Fi, etc.).
   - List of popular books with "View Details" links.
   - Navigation bar with links to Home, Browse Books, and Add Book pages.

2. **Browse Books Page**:
   - Displays a list of books filtered by categories.
   - Search functionality to filter books by title or author.
   - Dynamic routing for book categories and details.

3. **Book Details Page**:
   - Displays detailed information (Title, Author, Description, Rating) for a selected book.
   - Back to Browse button.

4. **Add Book Page**:
   - Form to add new books with proper validation.
   - Integration with Redux for state management.
   - Redirection to the Browse Books page after successful submission.

5. **404 Page**:
   - User-friendly "Page Not Found" page for undefined routes.
   - Link to navigate back to the Home page.

---

## Technologies Used

- **React**: Component-based UI library for building user interfaces.
- **Redux**: State management tool to handle global application state.
- **Vite**: Fast build tool and development server for modern JavaScript frameworks.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router**: Declarative routing for navigation between pages.

---

## Installation and Setup

Follow these steps to set up and run the project locally:

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd online-library
