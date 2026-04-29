# Dilip Dance - Nepali Cultural E-commerce Platform

A modern, responsive full-stack E-commerce web application celebrating Nepali dance culture. Built with React + Vite frontend and ready for MERN stack backend integration.

## 🌟 Features

### Frontend Features
- **Modern UI/UX**: Clean, responsive design with Nepali cultural theme
- **Dark/Light Mode**: Context-based theme switching
- **E-commerce System**: Product catalog, shopping cart, checkout UI
- **Search & Filter**: Advanced filtering for dance forms and products
- **Authentication UI**: Login/Register forms ready for backend integration
- **Glassmorphism Effects**: Modern UI with transparency and blur effects
- **Responsive Design**: Mobile-first approach with desktop optimization

### Cultural Content
- **Dance Forms**: Comprehensive collection of traditional Nepali dances
- **Cultural Heritage**: Information about festivals, music, and traditions
- **Product Catalog**: Authentic dance attire and cultural products
- **Educational Content**: Learning resources and cultural preservation

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Vanilla CSS** - Custom styling with CSS variables
- **Lucide React** - Beautiful icons

### Backend (Future Integration)
- **Node.js** + **Express.js**
- **MongoDB** database
- **JWT Authentication**
- **REST APIs** for Users, Products, Orders

### Design System
- **Inter & Outfit Fonts** - Modern typography
- **Nepali Color Palette** - Red (#DC143C), Blue (#003893), Cultural colors
- **Glassmorphism** - Modern UI effects
- **Responsive Grid** - Mobile-first layout system

## 📁 Project Structure

```
dilipdance/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components (Navbar, Footer)
│   │   └── ui/            # UI components (Button, Input, etc.)
│   ├── contexts/          # React contexts (Theme, Cart)
│   ├── pages/             # Page components
│   ├── App.jsx            # Main app component
│   ├── App.css            # App-specific styles
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dilipdance
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📄 Pages & Features

### Core Pages
- **Home** - Hero section, featured products, cultural highlights
- **About** - Company story, mission, team
- **Contact** - Contact form, information, FAQ
- **Dance** - Overview of dance categories
- **Journey** - Company history and milestones
- **Types of Dance** - Detailed dance forms with search/filter
- **Culture** - Nepali cultural heritage content
- **Dress** - E-commerce product catalog
- **Login/Register** - Authentication forms

### Key Features
- **Shopping Cart** - Add/remove items, quantity management
- **Theme Toggle** - Dark/light mode switching
- **Responsive Navigation** - Mobile-friendly menu
- **Product Filtering** - Search, category, price filters
- **Form Validation** - Client-side validation for auth forms
- **Loading States** - Smooth UX with loading indicators

## 🎨 Design System

### Color Palette
```css
--nepal-red: #DC143C;      /* Primary accent */
--nepal-dark-red: #A50F2D; /* Hover states */
--nepal-blue: #003893;     /* Secondary accent */
--bg-primary: #fcfcfc;      /* Light background */
--bg-secondary: #f4f4f5;    /* Light secondary */
--text-primary: #171717;    /* Dark text */
--text-secondary: #52525b;  /* Light text */
```

### Typography
- **Headings**: Outfit (weights: 400, 500, 600, 700, 800)
- **Body**: Inter (weights: 400, 500, 600)

### Components
- **Buttons**: Primary, secondary, loading states
- **Inputs**: Text, email, password with validation
- **Cards**: Product cards, content cards with hover effects
- **Navigation**: Sticky navbar with mobile menu
- **Forms**: Auth forms with error handling

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Style
- **ESLint**: Configured for React and modern JavaScript
- **Component Structure**: Functional components with hooks
- **CSS**: CSS variables for theming, utility classes
- **Naming**: PascalCase for components, camelCase for functions

### State Management
- **Theme Context**: Global theme state with localStorage persistence
- **Cart Context**: Shopping cart state with add/remove/update functionality
- **React Router**: Client-side routing with protected routes ready

## 🚀 Future Enhancements

### Backend Integration
- User authentication with JWT
- Product management system
- Order processing and payment integration
- User profiles and preferences

### Advanced Features
- AI-powered dance recommendations
- Video tutorials and live classes
- Multi-language support (English/Nepali)
- Admin dashboard for content management
- Social features and community forums

### Performance Optimizations
- Image optimization and lazy loading
- Service worker for offline functionality
- Advanced caching strategies
- Bundle splitting and code splitting

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Mobile-first approach with progressive enhancement.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Nepali cultural heritage and traditions
- Open source community for amazing tools
- React and Vite teams for excellent frameworks
- Lucide for beautiful icons

---

**Built with ❤️ for Nepali culture and dance heritage**
