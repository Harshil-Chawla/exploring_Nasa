# 🚀 NASA Space Explorer

> Explore the universe — one image at a time.

NASA Space Explorer is a web application that brings the cosmos to your screen using NASA's public APIs. Discover breathtaking astronomical imagery, from today's featured photo to the exact moment the universe looked on **your birthday**.


---

## ✨ Features

### 🌌 Astronomy Picture of the Day (APOD)
Get NASA's handpicked **Astronomy Picture of the Day** — a stunning image or video of our universe, accompanied by a brief explanation written by a professional astronomer. A new cosmic wonder, every single day.

### 🎂 Space on Your Birthday
Ever wondered what the universe looked like the day you were born? Enter your **birthday** and instantly travel back in time to see the NASA astronomy image from that exact date. A unique, personal connection to the cosmos.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5** | Structure & Markup |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** | Styling & Animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **JavaScript** | Logic & API Integration |
| 🛰️ **NASA APOD API** | Astronomy image data |

---

## 📸 Screenshots

> _Add screenshots of your app here for a better preview._

| Feature | Preview |
|--------|---------|
| 🌠 Image of the Day | _(screenshot)_ |
| 🎂 Birthday Space Image | _(screenshot)_ |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A free **NASA API Key** from [api.nasa.gov](https://api.nasa.gov/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Harshil-Chawla/exploring_Nasa.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd nasa_explorer
   ```

3. **Add your NASA API Key**

   Open the JavaScript file and replace the placeholder with your key:
   ```js
   const API_KEY = "YOUR_NASA_API_KEY_HERE";
   ```

4. **Open the app**

   Simply open `index.html` in your browser — no build tools or servers required!
   ```bash
   open index.html
   ```

---

## 🌐 NASA API Reference

This project uses the **APOD (Astronomy Picture of the Day)** endpoint:

```
GET https://api.nasa.gov/planetary/apod?api_key=YOUR_KEY&date=YYYY-MM-DD
```

| Parameter | Description |
|-----------|-------------|
| `api_key` | Your NASA API key (use `DEMO_KEY` for testing) |
| `date` | Specific date in `YYYY-MM-DD` format |

> Get your free API key at 👉 [https://api.nasa.gov/](https://api.nasa.gov/)

---

## 📁 Project Structure

```
nasa_explorer/
│
├── index.html        # Main HTML file
├── style.css         # Stylesheet
├── script.js         # JavaScript logic & API calls
└── README.md         # Project documentation
```

---

## 🤝 Contributing

Contributions are always welcome! If you have ideas for new features or improvements:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a **Pull Request**

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---


<div align="center">
  <p>Made with ❤️ and a love for the cosmos 🌌</p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>
