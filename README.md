# Karan Jagani - Interactive Portfolio 🚀



A highly interactive, immersive personal portfolio website built with modern web technologies. This project features physics-based animations, 3D face-tracking interactions, and a dynamic starfield background to create a unique user experience.

https://github.com/karanjagani494

![Portfolio Preview](public/Homepage.png) 

## ✨ Features

- **Interactive Background**:
    - **Starfield Background**: A dynamic starfield background responding to mouse interactions.
- **Physics-Based Animations**: Powered by **Framer Motion**, every element feels alive with smooth spring animations, magnetic buttons, and layout transitions.
- **Sound Design**: Integrated sound effects for startup, clicks, and interactions for a multi-sensory experience.
- **Dynamic Projects Showcase**: Filterable project grid with expandable details using shared layout animations.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

- Node.js (v20+ recommended)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, MainLayout
│   └── ui/           # Reusable UI components (ProjectCard, MagneticButton, etc.)
├── config/           # Site data and configuration
├── context/          # React Context (Sound, Starfield)
├── pages/            # Page components (Home, About, Projects, etc.)
├── utils/            # Helper functions
└── assets/           # Images, sounds, and global styles
```

## 📄 License

[MIT](LICENSE)
