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
- Contextual info buttons on the main menu, object card, and scale guide
- Follow camera with animated flight behavior
- Timeline scrubber for shifting the simulation by days, months, or years
- Event feed for lightweight moon transits, eclipses, and occultation-style alignments, smoothed for readability
- Real local image assets in `/images` for in-scene bodies
- Milky Way panorama background
- Staged loading overlay that warms the Milky Way, Sun, and core planet assets before interaction begins
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
- The faint orbital rings are visual guide tracks inside that compact layout, not literal physical bands or exact on-screen distance widths.
- Planet and moon diameters are kept on a shared relative size scale.
- Pluto remains on the simplified model path compared with the JPL-based planet set.
- Startup now uses a staged local-asset warmup: the Milky Way, Sun, and core planet/dwarf-planet imagery are preloaded first, while minor moon imagery can continue warming in the background.
- Very small smartphone-style viewports are intentionally blocked and shown a larger-screen message instead of forcing the full simulation into an unreadable render.

## Controls

### Core

- Zoom: `Mouse wheel`, `Ctrl+wheel`, `+`, `-`
- Pan: `Drag`
- Center clicked location: `Double-click`
- Pause or resume: `Space` or `P`
- Increase or decrease time factor: `W` / `S`
- Ramp time-factor changes faster: hold `W` / `S`
- Slow moons or return moon motion to default: `[` / `]`
- Reset simulation state: `R`
- Reset to defaults: `Shift+R`
- Clear hover/card artifacts: `Esc`

### Toggles

- Open follow chooser: `F`
- Toggle labels: `L`
- Toggle cards: `C`
- Switch metric / English units: `U`
- Toggle creator info: `I`
- Toggle the About panel: `A`
- Toggle help: `H` or `?`
- Cycle ambient music tracks / mute: `M`
- Toggle the Nibiru easter egg: `Shift+N`

### Date and Time

- Click `Time Factor` to type a value directly
- Click `Date` to enter a simulation date/time directly
- Use `Live Now` to toggle into the current real date/time at real-time speed, then toggle back to your prior simulation state
- Use the timeline scrubber to move through days, months, or years

### Touch / Mobile

- Pan: one-finger drag
- Zoom: pinch
- Access time, moon motion, zoom, center, follow, labels, music, units, the Live Now toggle, About, and Help from the touch toolbar

## On-Screen Panels

- `Help / Overlay`: controls and telemetry
- `Object Info`: hover/click card for planets, moons, and the Sun
- `Follow`: object chooser
- `About`: feature overview
- `More Info`: technology and source summary
- `Scale Guide`: explains compacted spacing, scaled body sizes, and the faint orbital guide rings in the scene
- `Loading Overlay`: staged startup warmup for core scene assets

Major panels also include small `i` buttons that open a concise explanation of what that display means and how to read it. Those messages stay up until the next key press, click, or wheel input.

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
- readability-smoothed event feed for moon alignments
- timeline offset

## Assets and Sources

### Imagery

- Local body images in `/images`
- Planet/moon scene imagery sourced from Wikipedia article imagery and stored locally
- Milky Way background sourced from ESO imagery and stored locally
- Core startup warmup prioritizes the Milky Way, Sun, planets, and Pluto before unlocking interaction, then continues with remaining body imagery in the background

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
- `tiny-screen-block-test.html`: standalone test stub that always shows the tiny-screen blocking message
- `images/`: local visual assets
- `README.md`: project documentation

## Running

Open `index.html` in a modern browser.

For best local behavior with cached assets and browser security rules, serving the folder through a lightweight local web server is recommended, but the project is also designed to work as a simple browser-opened HTML file in many cases.
