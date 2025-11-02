# MouseShope 🖱️

A simple e-commerce demo built with **Vue 3**, **Pinia**, **Vue Router**, **Supabase**, and **Tailwind CSS**.

🔗 **Live Demo:** [https://mouseshope.netlify.app/](https://mouseshope.netlify.app/)

---

## 🚀 Tech Stack

- **Vue 3** – Frontend framework
- **Pinia** – State management
- **Vue Router** – Client-side routing
- **Supabase** – Authentication & database
- **Tailwind CSS** – Styling

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mouseshope.git
cd mouseshope

# Install dependencies
npm install

# Run the project
npm run dev
```

Then open your browser at: **[http://localhost:5173](http://localhost:5173)**

---

## ⚙️ Environment Setup

Create a `.env.local` file and add your Supabase keys:

```bash
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📂 Project Structure

```
├─ src/
│  ├─ assets/          # Images, icons, etc.
│  ├─ components/      # Reusable UI components
│  ├─ pages/           # Application pages (Home, Shop, Cart...)
│  ├─ router/          # Vue Router setup
│  ├─ stores/          # Pinia stores
│  ├─ services/        # Supabase client
│  ├─ styles/          # Tailwind CSS setup
│  ├─ App.vue          # Root component
│  └─ main.js          # App entry point
├─ index.html
├─ package.json
├─ tailwind.config.cjs
└─ .env.local
```

---

## 🧱 Build

```bash
npm run build
```

---

## 🪄 License
