# Solar System Simulation

An interactive HTML5 solar system simulation built for direct use in a modern browser.

This project focuses on readability, exploration, and education. It blends real astronomical reference data with a compact visual layout so the system can fit on a normal display while still showing meaningful size, timing, and motion relationships.

## Highlights

- Compact solar system layout with size-scaled planets and moons
- Date-based planet positions using JPL approximate heliocentric formulas
- Date-based moon positions using stored mean-motion reference values
- Pluto included as a dwarf planet
- Large moon set across Earth, Mars, Jupiter, Saturn, Uranus, Neptune, and Pluto
- Hover/click object cards with facts, size, orbital period, orbital speed, approximate Sun distance, follow action, and Wikipedia link
- Follow camera with animated flight behavior
- Timeline scrubber for shifting the simulation by days, months, or years
- Event feed for lightweight moon transits, eclipses, and occultation-style alignments
- Real local image assets in `/images` for in-scene bodies
- Milky Way panorama background
- Ambient procedural music with multiple tracks and mute/cycle behavior
- Mobile and tablet touch support
- Persistent user settings via browser storage

## Technology

- HTML5
- CSS
- JavaScript
- Canvas 2D API
- Web Audio API

The app runs entirely in the browser and does not require a build step.

## Data Model Notes

- Planet positions are computed locally from embedded JPL approximate-position formulas.
- Moon positions are computed locally from stored mean-element style reference values and orbital periods.
- The app does **not** make live JPL or NASA requests each frame or each date change.
- Distances are intentionally compacted for readability.
- Planet and moon diameters are kept on a shared relative size scale.
- Pluto remains on the simplified model path compared with the JPL-based planet set.

## Controls

### Core

- `Mouse wheel`, `Ctrl+wheel`, `+`, `-`: zoom
- `Drag`: pan
- `Double-click`: center clicked location
- `Space` or `P`: pause/resume
- `W` / `S`: increase or decrease time factor
- Hold `W` / `S`: accelerated ramp
- `[` / `]`: slow moons / return moon motion toward default
- `R`: reset simulation state
- `Shift+R`: reset to defaults
- `Esc`: clear hover/card artifacts

### Toggles

- `F`: open follow chooser
- `L`: labels on/off
- `C`: cards on/off
- `U`: metric/English units
- `I`: creator info
- `A`: about panel
- `H` or `?`: help on/off
- `M`: cycle ambient music tracks and mute
- `Shift+N`: toggle Nibiru easter egg

### Date and Time

- Click `Time Factor` to type a value directly
- Click `Date` to enter a simulation date/time directly
- Use `Live Now` to jump to the current real date/time and set real-time speed
- Use the timeline scrubber to move through days, months, or years

### Touch / Mobile

- One-finger drag: pan
- Pinch: zoom
- Touch toolbar includes time, moon motion, zoom, center, follow, labels, music, units, live sync, about, and help

## On-Screen Panels

- `Help / Overlay`: controls and telemetry
- `Object Info`: hover/click card for planets, moons, and the Sun
- `Follow`: object chooser
- `About`: feature overview
- `More Info`: technology and source summary
- `Scale Guide`: explains compacted spacing and scaled body sizes

## Telemetry

The telemetry area can show:

- current time factor
- human-readable time rate
- current track
- Earth years elapsed
- simulation date
- moon motion multiplier
- units mode
- label state
- card state
- follow target
- current motion model description
- event feed for moon alignments
- timeline offset

## Assets and Sources

### Imagery

- Local body images in `/images`
- Planet/moon scene imagery sourced from Wikipedia article imagery and stored locally
- Milky Way background sourced from ESO imagery and stored locally

### Astronomy References

- JPL approximate planetary positions
- JPL planetary satellite mean orbital element references
- NASA/JPL fact-sheet style values for diameters, orbital periods, and related physical numbers

## Modeling Limitations

- Distances are compressed to fit the screen
- This is a 2D top-down style simulation, not a full 3D orbital mechanics engine
- Event detection is lightweight and educational, not observatory-grade prediction
- Planet positions are more realistic than the compact layout itself, because visual spacing is still intentionally remapped

## Persistence

The simulation saves key settings in browser storage, including:

- time factor
- moon motion
- date reference
- pause state
- camera view
- labels/help/cards state
- follow target
- music track and enabled state
- units mode
- selected timeline scale

## Files

- `index.html`: main app
- `images/`: local visual assets
- `README.md`: project documentation

## Running

Open `index.html` in a modern browser.

For best local behavior with cached assets and browser security rules, serving the folder through a lightweight local web server is recommended, but the project is also designed to work as a simple browser-opened HTML file in many cases.
