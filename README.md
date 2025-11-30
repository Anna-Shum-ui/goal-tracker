# Goal Tracker Application

## Project Description
Goal Tracker is a simple web application built with React and TypeScript.  
It allows users to create goals, mark them as done, delete them, and view all goals in a list.  
The app also fetches a daily quote from a public API for inspiration.

## Setup Instructions
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Anna-Shum-ui/goal-tracker.git]
    cd goal-tracker
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the application (Development Mode):**
    ```bash
    npm run dev
    ```

## Features List
* **Goal Management:** Add, remove, and mark goals as complete/incomplete.
* **Data Persistence:** Goals are saved locally in the browser (`localStorage`).
* **External API Integration:** Displays a new "Quote of the Day" on the homepage.
* **Form Handling:** Uses React Hook Form for submitting new goals with basic validation.

## Technologies Used
* **Frontend:** React (TSX)
* **Language:** TypeScript
* **State Management:** React Context API
* **Routing:** React Router DOM
* **Forms:** React Hook Form
* **Styling:** Pure CSS (with module patterns)
* **Testing:** Jest and React Testing Library

## How to Run Tests
To verify component interaction, run the following command:
```bash
npm test