# Scentronix Frontend Application
## Overview
The Scentronix Frontend Application is a modular frontend project designed to provide a scalable and maintainable structure for developing user interfaces. This project utilizes modern frontend technologies and follows best practices to ensure high performance and code quality. The project includes a mock json server for testing API requests and responses.

## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js (version 18 or higher)
- npm or yarn (preferably npm version 8 or higher)

## Project Structure

```
scentronix-frontend-application/
├── apps/
│   └── admin/                 # Main application for admin interface
│       ├── public/            # Public assets
│       ├── src/               # Source code
│       ├── next-env.d.ts      # Next.js environment variables definition
│       ├── README.md
│       ├── package.json
│       ├── tsconfig.json
│       ├── tailwind.config.ts
│       ├── postcss.config.js
│       └── .eslintrc.js
├── packages/
│   ├── ui/                    # UI components package
│   ├── config-tailwind/       # Tailwind CSS configuration package
│   ├── config-eslint/         # ESLint configuration package
├── .env.example               # Example environment variables
├── .npmrc                     # npm configuration
├── Dockerfile                 # Docker configuration
├── turbo.json                 # Turbo repo configuration
├── package.json               # Project configuration
├── package-lock.json          # Lockfile for npm dependencies
└── README.md                  # Project documentation

```

## Installation
To install the dependencies, in the root folder of the project run:

```shell
npm install
```

This will install all the required dependencies for the project.

## Project Execution
To start the project, first run:

```shell
cd apps/shop

npm run json-server
```

This will start the mock JSON server to simulate API requests and responses. Next, in a new terminal window and switch to root path of the project, run:

```shell
npm run dev
```

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
