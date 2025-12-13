# underfit.io

The official "Coming Soon" landing page for underfit.io.

## Overview

This project is a static website built with [Vite](https://vitejs.dev/) and Vanilla JavaScript. It features a retro-tech, dot-matrix inspired design using the 'Silkscreen' font and CSS animations.

## Features

- **Retro Aesthetic**: Custom CSS text shadows and animations for a glowing, CRT-like effect.
- **Responsive Design**: Adapts to different screen sizes.
- **Optimized Build**: Uses Vite for fast development and optimized production builds.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/underfit-io/underfit.io.git
    cd underfit.io
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Development

Start the local development server:

```bash
npm run dev
```

### Build

Build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

## Deployment

This project is configured to deploy to **GitHub Pages**.

To deploy the latest version:

```bash
npm run deploy
```

This command will automatically:
1.  Run `npm run build` to generate the production assets.
2.  Push the contents of the `dist` folder to the `gh-pages` branch.

## Technologies

- **Vite**: Build tool and development server.
- **Vanilla JS**: Core logic.
- **CSS3**: Styling and animations.
- **Google Fonts**: Typography ('Silkscreen').
