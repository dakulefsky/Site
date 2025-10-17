# Getting Started

Welcome to the Afikei Yehuda Campaign Website project! This guide will help you set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/dakulefsky/Site.git
   cd Site
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Project

To start the development server:

```bash
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable). Open your browser and navigate to:

```
http://localhost:3000
```

## Project Overview

This is a static website served by an Express.js server. The main files are:

- `src/index.html` - The main HTML page with embedded CSS
- `src/favicon.svg` - The site icon
- `server.js` - Express server that serves static files

## Making Changes

1. Edit files in the `src/` directory
2. Refresh your browser to see changes (the Express server serves static files)
3. For server.js changes, restart the server with `npm start`

## Deployment

The site is configured for Netlify deployment via the `netlify.toml` file. Pushing to the main branch will automatically deploy updates.

## Need Help?

If you encounter any issues:
1. Check that Node.js and npm are properly installed
2. Ensure all dependencies are installed (`npm install`)
3. Check that port 3000 is not already in use
4. Review the [README.md](../README.md) for more details

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.