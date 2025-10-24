# 🍽️ Namaste React - Food Delivery App

A modern, full-featured food delivery web application built with React, featuring real-time restaurant data integration, shopping cart functionality, and responsive design.

![React](https://img.shields.io/badge/React-19.1.0-blue)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.9.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-cyan)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)

## 🚀 Live Demo

[View Live Demo](https://github.com/subodhskedare/Namaste-React) | [GitHub Repository](https://github.com/subodhskedare/Namaste-React)

## ✨ Features

### 🏪 Restaurant Discovery
- **Real-time Restaurant Data**: Integration with live restaurant API
- **Advanced Search**: Search restaurants by name, cuisine, or location
- **Smart Filtering**: Filter by ratings, delivery time, and price range
- **Responsive Cards**: Beautiful restaurant cards with hover effects

### 🛒 Shopping Cart
- **Add/Remove Items**: Seamless cart management
- **Persistent Cart**: Cart state maintained across page navigation
- **Real-time Updates**: Instant cart updates with Redux state management
- **Clear Cart**: One-click cart clearing functionality

### 📱 User Experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Loading States**: Custom shimmer animations for better UX
- **Online/Offline Detection**: Automatic connectivity status detection
- **Smooth Animations**: CSS transitions and hover effects

### 🍽️ Menu Management
- **Dynamic Menus**: Real-time menu data from restaurants
- **Accordion Interface**: Collapsible menu categories
- **Nested Categories**: Support for subcategories and complex menu structures
- **Item Details**: Complete item information with images and pricing

## 🛠️ Technologies Used

### Frontend
- **React 19.1.0** - Modern React with hooks and functional components
- **JavaScript ES6+** - Latest JavaScript features
- **Tailwind CSS 3.4.18** - Utility-first CSS framework
- **HTML5/CSS3** - Semantic markup and styling

### State Management
- **Redux Toolkit 2.9.0** - Modern Redux with simplified syntax
- **React-Redux 9.2.0** - React bindings for Redux

### Routing & Navigation
- **React Router DOM 6.22.3** - Client-side routing
- **Dynamic Routes** - Parameterized routes for restaurant details
- **Lazy Loading** - Code splitting for performance optimization

### Build Tools
- **Parcel 2.14.4** - Zero-configuration build tool
- **PostCSS 8.5.6** - CSS processing
- **Autoprefixer 10.4.21** - Automatic vendor prefixing

### Development
- **Jest** - Testing framework
- **Git** - Version control

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Body.js         # Main restaurant listing
│   ├── RestaurantCard.js # Restaurant card component
│   ├── RestaurantMenu.js # Restaurant detail page
│   ├── Cart.js         # Shopping cart component
│   ├── MenuAccordion.js # Collapsible menu component
│   ├── Shimmer.js      # Loading animation component
│   └── ...
├── Hooks/              # Custom React hooks
│   ├── useOnlineStatus.js # Online/offline detection
│   ├── useRestaurantMenu.js # Restaurant menu data fetching
│   └── UserContect.js  # User context management
├── Redux/              # State management
│   ├── appStore.js     # Redux store configuration
│   └── cartSlice.js    # Cart state management
├── utils/              # Utility functions and constants
│   ├── constant.js     # API endpoints and constants
│   └── mockData.js     # Mock data for development
└── App.js              # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/subodhskedare/Namaste-React.git
   cd Namaste-React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:1234` to view the application

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist/` directory.

## 🎯 Key Features Implementation

### 🔍 Search & Filter
- Real-time restaurant search with debounced input
- Advanced filtering by ratings, cuisine, and location
- Dynamic result count display

### 🛒 Cart Management
- Redux-powered cart state management
- Add/remove items with quantity tracking
- Persistent cart across page navigation
- Clear cart functionality

### 📱 Responsive Design
- Mobile-first responsive layout
- Grid system for restaurant cards
- Adaptive navigation and components
- Touch-friendly interface

### ⚡ Performance Optimization
- Code splitting with React.lazy()
- Custom shimmer loading animations
- Optimized image loading with CDN
- Efficient re-rendering with proper state management

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📱 Screenshots

### Home Page
- Restaurant listing with search functionality
- Filter options and responsive grid layout
- Shimmer loading animations

### Restaurant Details
- Detailed restaurant information
- Collapsible menu categories
- Add to cart functionality

### Shopping Cart
- Cart items with remove options
- Clear cart functionality
- Responsive cart interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Subodh Kedare**
- GitHub: [@subodhskedare](https://github.com/subodhskedare)
- Project Link: [Namaste React](https://github.com/subodhskedare/Namaste-React)

## 🙏 Acknowledgments

- Inspired by popular food delivery platforms like Swiggy and Zomato
- Built as part of the Namaste React course
- Thanks to the React community for excellent documentation and resources

---

⭐ **Star this repository if you found it helpful!**