# Afikei Yehuda Campaign Website

A campaign website to support the reprinting of the Afikei Yehuda sefarim with authentic typesetting, accurate proofreading, and beautiful binding.

## About

This project is a simple, accessible web page built with HTML, CSS, and Node.js/Express, designed to promote the Afikei Yehuda campaign and facilitate donations through The Chesed Fund.

## Features

- Responsive design optimized for all devices
- Accessible interface following WCAG standards
- Fast loading with optimized images
- Clean, semantic HTML structure
- Express server for local development and deployment

## Getting Started

To get started with this project, clone the repository and install the dependencies.

```bash
git clone https://github.com/dakulefsky/Site.git
cd Site
npm install
```

## Usage

After installing the dependencies, you can start the development server:

```bash
npm start
```

The website will be available at `http://localhost:3000`

## Project Structure

```
Site/
├── src/              # Static website files
│   ├── index.html   # Main HTML page
│   └── favicon.svg  # Site icon
├── server.js        # Express server
├── package.json     # Node.js dependencies
└── netlify.toml     # Netlify deployment configuration
```

## Deployment

This site is configured for deployment on Netlify. The `netlify.toml` file specifies the build settings.

For Netlify deployment:
- The `src` folder is published directly
- No build process is required

## Technologies Used

- HTML5 with semantic markup
- CSS3 with custom properties (CSS variables)
- Node.js & Express for development server
- SVG for scalable icon

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

To support the Afikei Yehuda campaign, visit [The Chesed Fund](https://thechesedfund.com/dakulefsky/reprint-the-famed-afikei-yehuda).