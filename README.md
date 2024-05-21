# Task Management Application

This is a simple task management application built using React.js, Next.js, TypeScript, Redux, and Tailwind CSS. The application allows users to:

- Display a list of tasks with their title and completion status.
- Add new tasks to the list.
- Toggle the completion status of tasks.
- Delete tasks from the list.
- Persist tasks data even after a page refresh using `localStorage`.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

These instructions will help you set up the project on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bkabhi/task-Manager-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-Manager-assignment
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```
my-task-app/
├── components/
│   ├── Task.tsx
│   └── TaskList.tsx
├── pages/
│   └── index.tsx
│   └── _app.tsx
├── redux/
│   ├── actions.ts
│   ├── reducers.ts
│   └── store.ts
├── styles/
│   └── globals.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── next.config.js
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode. Open `http://localhost:3000` to view it in your browser.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run start`: Starts the Node.js server for the built app.
- `npm run lint`: Runs ESLint to lint the code.

## Dependencies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [React Redux](https://react-redux.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

This `README.md` file provides a clear overview of the project, how to set it up, the structure of the project, available scripts, dependencies, and instructions for contributing. Feel free to adjust the repository URL and any other details as needed.