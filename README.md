# SpeakUp — AI English Speaking Practice Studio

A fully client-side English speaking practice website built with pure HTML, CSS, and JavaScript. Designed to simulate a real presentation environment, SpeakUp lets you read aloud, records your speech, tracks your accuracy word-by-word, and scores your performance — all in the browser with no server or account required.

---

## Screenshots

> Open `index.html` in Chrome to see the live interface. The layout features a dark terminal-meets-studio aesthetic with a text panel, live camera preview, real-time transcript, and a score card modal.

---

## Features

### Random Text Generator
- 30 hand-written practice paragraphs, each **200–300 words** long
- Topics span Business, Technology, Environment, Science, Health, Philosophy, Finance, Arts, Space, Life Skills, and more
- Each text is tagged with a **difficulty level** (Easy / Medium / Hard) and a **topic label**
- Word count is displayed as a badge when a text is loaded
- Every click of **Generate Text** picks a new paragraph at random (never repeats the previous one)

### Live Camera Preview
- Uses the browser's `getUserMedia` API to access the webcam
- Video is mirrored (selfie view) for a natural presentation feel
- A **REC** indicator animates in the corner while speech recognition is active
- Gracefully handles permission-denied errors with a toast notification
- **Start Camera** and **Stop Camera** buttons with visual status indicator

### Speech Recognition
- Powered by the browser-native **Web Speech API** (continuous mode)
- Displays a live transcript as you speak, updated in real time with interim results
- Compares every spoken word against the corresponding word in the practice text
- Words are highlighted inline:
  - 🟢 **Green** — correct match
  - 🔴 **Red** — incorrect or mispronounced
  - 🔵 **Cyan** — the next expected word
- Auto-restarts recognition if it stops mid-session

### Timer
- Starts automatically the moment speech recognition begins
- Displays elapsed time in `MM:SS` format with an animated progress bar
- Progress bar fills over a 4-minute window (calibrated for 200–300 word texts)
- Stops when you click **Stop Speaking**

### Live Score Sidebar
Updates in real time as you speak:
- **Accuracy %** — percentage of spoken words that matched the original
- **Words Spoken** — running count of words detected
- **Best Streak** — longest consecutive run of correctly spoken words

### Score Card Modal
Shown automatically after you stop speaking:
- Animated circular accuracy ring that fills and changes colour (green / yellow / red)
- Four stat cards: Time Taken, Words Spoken, Word Match %, and Words Per Minute
- Personalised feedback message based on your accuracy score
- **Try Again** button resets the session on the same text
- Click outside the modal or press `Escape` to dismiss

### Fullscreen / Presentation Mode
- Hides the header and control bar
- Enlarges the practice text to `2.1rem` for easy reading at a distance
- Shrinks the camera into a floating corner widget
- Dark immersive background — feels like a real presentation stage
- A floating **Exit Fullscreen** button stays visible in the top-right corner

---

## Keyboard Shortcuts

| Key       | Action                                      |
|-----------|---------------------------------------------|
| `Space`   | Generate a new random text (when not speaking) |
| `Enter`   | Start Speaking / Stop Speaking (toggle)     |
| `Escape`  | Close the score card modal or exit fullscreen |

---

## File Structure

```
speakup/
├── index.html   # App structure, layout, and all UI elements
├── style.css    # Dark theme, animations, responsive layout
├── script.js    # All application logic — texts, camera, speech, scoring
└── README.md    # This file
```

No build tools, no package manager, no dependencies. Every file is self-contained.

---

## Getting Started

### Option 1 — Python local server (recommended)
```bash
cd speakup
python -m http.server 8000
```
Then open `http://localhost:8000` in **Google Chrome**.

### Option 2 — VS Code Live Server
Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.

### Option 3 — Any static host
Upload the three files to GitHub Pages, Netlify, Vercel, or any static hosting service. HTTPS is required for microphone access on deployed sites.

> **Do not open `index.html` directly as a `file://` URL.** Browsers block microphone and camera access on the `file://` protocol. A local server is required.

---

## Browser Compatibility

| Browser         | Speech Recognition | Camera | Recommended |
|-----------------|--------------------|--------|-------------|
| Google Chrome   | ✅ Full support     | ✅     | ✅ Yes       |
| Microsoft Edge  | ✅ Full support     | ✅     | ✅ Yes       |
| Brave           | ⚠️ Needs flag       | ✅     | ⚠️ Partial  |
| Firefox         | ❌ Not supported    | ✅     | ❌ No        |
| Safari (macOS)  | ⚠️ Experimental     | ✅     | ⚠️ Partial  |

The Web Speech API is a Chrome-first technology. **Google Chrome** gives the most reliable experience.

---

## How to Use

1. **Open** the site in Chrome via a local server
2. Click **Generate Text** to load a random practice paragraph (or press `Space`)
3. Click **Start Camera** to enable your webcam preview *(optional)*
4. Click **Start Speaking** (or press `Enter`) — the timer starts and the microphone activates
5. Read the paragraph aloud at a natural pace — watch the words highlight as you go
6. Click **Stop Speaking** (or press `Enter` again) when you finish
7. Review your **Score Card** — accuracy ring, WPM, word count, and feedback
8. Click **Try Again** to repeat the same text, or **Generate Text** for a new one
9. Toggle **Fullscreen Mode** for a distraction-free presentation simulation

---

## Practice Text Library

All 30 texts are written at a level suitable for spoken English practice. Each is between 200 and 300 words — long enough to build stamina and measure fluency, short enough to complete in a single focused session.

| # | Topic | Difficulty |
|---|-------|------------|
| 1 | Business Presentation | Easy |
| 2 | Artificial Intelligence | Medium |
| 3 | Climate Change | Medium |
| 4 | Public Speaking | Medium |
| 5 | The Universe & Science | Hard |
| 6 | Education | Easy |
| 7 | Leadership | Easy |
| 8 | Global Economics | Hard |
| 9 | Mental Health | Medium |
| 10 | Innovation | Medium |
| 11 | Ocean & Environment | Medium |
| 12 | Democracy | Hard |
| 13 | Reading & Literature | Easy |
| 14 | Neuroscience | Hard |
| 15 | Travel | Medium |
| 16 | Social Media | Hard |
| 17 | Exercise & Health | Easy |
| 18 | Space Exploration | Medium |
| 19 | Entrepreneurship | Hard |
| 20 | Music & Arts | Medium |
| 21 | Food & Environment | Medium |
| 22 | Friendship | Easy |
| 23 | Quantum Computing | Hard |
| 24 | The Arts in Society | Medium |
| 25 | Sleep & Health | Medium |
| 26 | Digital Divide | Hard |
| 27 | Philosophy | Hard |
| 28 | Water Crisis | Medium |
| 29 | Empathy | Easy |
| 30 | Biodiversity | Hard |

---

## Scoring System

### Accuracy %
Calculated by comparing each spoken word (normalised to lowercase, punctuation stripped) against the corresponding word in the original text.

```
Accuracy = (Correct Words / Total Words Spoken) × 100
```

### Words Per Minute
```
WPM = (Words Spoken / Elapsed Seconds) × 60
```

### Feedback Thresholds
| Accuracy | Feedback |
|----------|----------|
| 90%+ | Excellent — presentation-ready |
| 75–89% | Great — minor improvements needed |
| 55–74% | Good — focus on clarity and pacing |
| Below 55% | Keep practicing — slow down and enunciate |

---

## Design

- **Theme:** Dark terminal-meets-studio aesthetic
- **Fonts:** [Syne](https://fonts.google.com/specimen/Syne) (display) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) (monospace labels)
- **Accent colours:** Cyan `#00e5ff`, Green `#00ffa3`, Red `#ff4d6d`
- **Animations:** Ambient grid, pulsing logo dot, word highlight transitions, score ring draw, modal scale-in
- **Responsive:** Works on tablet and mobile — control bar stacks vertically, sidebar reflows to a two-column grid

---

## Permissions Required

| Permission | Used For |
|------------|----------|
| **Microphone** | Web Speech API — capturing spoken audio for recognition |
| **Camera** | `getUserMedia` — showing live webcam preview |

Both permissions are requested only when the user clicks the relevant button. Neither audio nor video is recorded, stored, or transmitted anywhere. Everything runs entirely in the browser.

---

## Limitations

- Speech recognition accuracy depends on microphone quality, background noise, and your accent
- The Web Speech API sends audio to Google's servers for processing (this is handled entirely by the browser, not by this application)
- No offline support — speech recognition requires an internet connection in Chrome
- Adding new practice texts is done by editing the `TEXT_LIBRARY` array in `script.js`

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Logic | Vanilla JavaScript (ES6+) |
| Speech | Web Speech API (`SpeechRecognition`) |
| Camera | MediaDevices API (`getUserMedia`) |
| Fonts | Google Fonts (Syne + Space Mono) |

Zero frameworks. Zero dependencies. Zero build steps.

---

## License

This project is released for personal and educational use. Feel free to fork, extend, and adapt it for your own learning tools.
