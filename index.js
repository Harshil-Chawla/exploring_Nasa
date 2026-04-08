const resultBox = document.getElementById("result");
const dateInput = document.getElementById("dateInput");
const searchButton = document.getElementById("searchBtn");
const todayButton = document.getElementById("todayBtn");
const themeButton = document.getElementById("themeToggle");

const apiKey = "nDAmKxQIhAVHwUoBRfEV1MncoR70Yp0MS29qKpRl";
const firstApodDate = "1995-06-16";

function getToday() {
    return new Date().toISOString().split("T")[0];
}

function showMessage(text, isError = false) {
    resultBox.innerHTML = `
        <section class="result-box">
            <p class="${isError ? "error-text" : ""}">${text}</p>
        </section>
    `;
    
}

function getMediaHtml(data) {
    if (data.media_type === "video") {
        return `
            <div class="video-link-box">
                <p>This APOD is a video.</p>
                <a href="${data.url}" target="_blank" rel="noopener noreferrer">Open Video</a>
            </div>
        `;
    }

    return `<img src="${data.url}" alt="${data.title}">`;
}

function showApod(data) {
    resultBox.innerHTML = `
        <section class="result-box">
            <div class="title-box">
                <h1>${data.title}</h1>
                <p class="result-date">${data.date}</p>
            </div>
            <div class="photo-box">
                ${getMediaHtml(data)}
            </div>
            <div class="text-box">
                <p>${data.explanation}</p>
            </div>
        </section>
    `;
}

async function loadApod(date) {
    showMessage(`Loading APOD for ${date}...`);

    try {
        const response = await fetch(
            `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
        );
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.msg || `Request failed with status ${response.status}`);
        }

        if (!data.title || !data.explanation || !data.url) {
            throw new Error("NASA API returned incomplete data for this date.");
        }

        showApod(data);
    } catch (error) {
        console.error(error);
        showMessage(error.message, true);
    }
}

function searchByDate() {
    const selectedDate = dateInput.value;

    if (!selectedDate) {
        showMessage("Please choose a date first.", true);
        return;
    }

    loadApod(selectedDate);
}

function updateTheme(theme) {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${theme}-mode`);
    themeButton.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
}

const today = getToday();
dateInput.min = firstApodDate;
dateInput.max = today;
dateInput.value = today;
updateTheme("light");

searchButton.addEventListener("click", searchByDate);

todayButton.addEventListener("click", () => {
    const currentDate = getToday();
    dateInput.max = currentDate;
    dateInput.value = currentDate;
    loadApod(currentDate);
});

themeButton.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
    updateTheme(nextTheme);
});

loadApod(today);
