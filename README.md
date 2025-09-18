# React Sandbox

A modern React development environment featuring:

- ⚡️ [Vite](https://vite.dev/) - Next Generation Frontend Tooling
- ⚛️ [React](https://react.dev/) - The library for web and native user interfaces
- 📝 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🧪 [Vitest](https://vitest.dev/) - Blazing Fast Unit Test Framework
- 📋 [ESLint](https://eslint.org/) - Pluggable JavaScript linter
- 💅 [Prettier](https://prettier.io/) - Code formatter
- 🐶 [Husky](https://typicode.github.io/husky/) - Git hooks made easy
- 📦 [lint-staged](https://github.com/lint-staged/lint-staged) - Run linters on git staged files

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (comes with Node.js)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```sh
   npm ci
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests with Vitest
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── assets/      # Static assets
├── App.tsx      # Main App component
├── App.css      # App-specific styles
├── index.css    # Global styles
└── main.tsx     # Application entry point
```

## Testing

Tests are written using Vitest and React Testing Library. Run them with:

```sh
npm test
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
