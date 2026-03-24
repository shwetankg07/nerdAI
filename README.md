<div align="center">
  <h1>nerdAI 🧠✨</h1>
  <p>Your Ultimate AI-Powered Study Companion</p>

  <p>
    <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" /></a>
    <a href="#"><img src="https://img.shields.io/badge/Gemini_API-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini" /></a>
  </p>
</div>

## 📌 Overview
**nerdAI** is a smart, interactive study companion designed to help students organize subjects, manage tasks, and plan revisions. Integrated with the powerful **Google Gemini API**, it goes a step further by automatically generating personalized study materials like topic summaries, practice questions, and flashcards.

---

## ✨ Features
- 📚 **Subject & Topic Organization**: Easily categorize what you need to study.
- 📝 **Task Management**: Keep track of upcoming assignments and study sessions.
- 🔁 **Revision Planning**: Schedule and monitor your revision cycles.
- 🤖 **AI-Generated Content**: 
  - **Summaries**: Get quick, clear overviews of complex topics.
  - **Practice Questions**: Test your knowledge with dynamically generated quizzes.
  - **Flashcards**: Master key concepts with AI-curated flashcards.
- 📊 **Progress Analytics**: Beautiful charts using `Recharts` to visualize your study habits.
- 🎨 **Responsive & Interactive UI**: Smooth animations powered by `Framer Motion`.

---

## 🛠️ Tech Stack
- **Frontend Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **State Management / Hooks**: Custom React Hooks
- **Styling / Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Visualization**: [Recharts](https://recharts.org/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Yup](https://github.com/jquense/yup)
- **AI Integration**: Google Gemini API 

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher recommended) and `npm` installed. You will also need an API key from [Google AI Studio](https://aistudio.google.com/).

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nerdAI.git
   cd nerdAI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Google Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view the app in your browser!

---

## 📁 Project Structure

```text
nerdAI/
├── src/
│   ├── components/      # Reusable UI components (TaskCard, TopicCard, ProgressChart)
│   ├── hooks/           # Custom React hooks (useSubjects, useTasks, useDebounce)
│   ├── pages/           # Main route pages (Dashboard, Tasks)
│   ├── services/        # External interactions (aiService.js)
│   ├── index.css        # Global CSS styles
│   └── main.jsx         # Application entry point
├── .env                 # Environment variables (not tracked by Git)
├── package.json         # Project metadata and dependencies
└── vite.config.js       # Vite configuration
```

---

## 🤝 Contributing
Contributions are always welcome! 

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE) - see the LICENSE file for details.

---
<div align="center">
  <i>Built with ❤️ for better learning.</i>
</div>
