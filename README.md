# 🎮 GameZone – 10 Classic Games PWA

A Progressive Web App (PWA) featuring 10 famous classic games you can play entirely offline in your browser.

## 🕹️ Games Included

| # | Game | Genre | Description |
|---|------|-------|-------------|
| 1 | **Tetris** | Classic | Stack tetrominoes, clear lines, level up |
| 2 | **Snake** | Arcade | Eat food, grow longer, don't crash |
| 3 | **2048** | Puzzle | Merge tiles to reach 2048 |
| 4 | **Minesweeper** | Puzzle | Reveal safe squares, flag the mines |
| 5 | **Chess** | Strategy | Play against a minimax AI (3 difficulties) |
| 6 | **Pac-Man** | Arcade | Eat dots, dodge ghosts, eat power pellets |
| 7 | **Breakout** | Action | Break bricks with a bouncing ball + power-ups |
| 8 | **Memory Match** | Puzzle | Find all matching card pairs |
| 9 | **Sudoku** | Strategy | Fill the 9×9 grid (Easy / Medium / Hard) |
| 10 | **Space Invaders** | Action | Shoot alien waves, protect the Earth |

## ✨ Features

- **100% Offline** – All games run in the browser with no internet required after install
- **PWA Ready** – Install to home screen on mobile or desktop via the browser prompt
- **No Dependencies** – Pure HTML, CSS & JavaScript, no frameworks or build tools needed
- **Responsive** – Works on desktop and mobile with touch/swipe controls
- **Dark Theme** – Sleek dark aesthetic throughout

## 🚀 Running Locally

Just open `index.html` in any modern browser, or serve it with any static file server:

```bash
# Python 3
python3 -m http.server 8080
# Then open http://localhost:8080
```

For full PWA features (service worker, offline caching) you need to serve over HTTP (not `file://`).

## 📁 Project Structure

```
/
├── index.html           # Main game hub
├── manifest.json        # PWA manifest
├── service-worker.js    # Offline caching
├── css/style.css        # Hub styles
├── js/app.js            # PWA install logic
├── icons/               # PWA icons (192px, 512px)
└── games/
    ├── tetris/index.html
    ├── snake/index.html
    ├── 2048/index.html
    ├── minesweeper/index.html
    ├── chess/index.html
    ├── pacman/index.html
    ├── breakout/index.html
    ├── memory/index.html
    ├── sudoku/index.html
    └── space-invaders/index.html
```

## 🎯 Controls

Each game shows its controls on screen. Common controls:
- **Arrow keys / WASD** – movement
- **Space** – shoot / hard drop / launch ball
- **P** – pause
- **Touch swipe** – mobile controls on all games