# 🎮 Gaming Mouse Store

A modern e-commerce web application for gaming mice built with Vue 3, Pinia, and JSON Server.

## ✨ Features

- 🛒 **Shopping Cart** - Add, remove, and manage products
- ❤️ **Favorites** - Save products you love
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Beautiful animations and effects
- 🌙 **Dark Mode** - Automatic theme detection
- 🔄 **Demo Mode** - Works without JSON Server

## 🛠️ Tech Stack

- **Vue 3** - Modern JavaScript framework
- **Pinia** - State management
- **Vue Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **JSON Server** - Fake REST API _(optional)_
- **Axios** - HTTP client

> 💡 **Note**: Supabase integration is commented out in the code, JSON Server is used for the demo.

## 🚀 Quick Start

### Option 1: Full Functionality (Recommended)

```bash
# 1. Install dependencies
npm install

# 2. Start JSON Server (terminal 1)
npm run json-server

# 3. Start Vue app (terminal 2)
npm run dev
```

### Option 2: Demo Mode (No Server Required)

```bash
# 1. Install dependencies
npm install

# 2. Start Vue app
npm run dev
```

> In demo mode, the app shows 3 sample products and all features work locally.

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Application pages
├── store/         # Pinia stores
├── router/        # Vue Router configuration
└── lib/           # Utilities and configs
```

## 🎯 API Endpoints

The app uses JSON Server for data. Fallback data is included for demo mode.

- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID
- `PATCH /products/:id` - Update product

## 📄 Pages

- `/` - Home page
- `/catalog` - Product catalog
- `/cart` - Shopping cart
- `/about` - About page
- `/contacts` - Contact page

## 🎨 Demo Features

When JSON Server is not running, the app automatically switches to demo mode and shows:

- 3 sample gaming mice
- Working cart and favorites
- Product details and filtering
- Beautiful animations and effects

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd mousestore
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start JSON Server (optional)**

   ```bash
   npm run json-server
   ```

4. **Run the application**

   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ for gaming enthusiasts**
