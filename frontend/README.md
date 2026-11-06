# A birthday page

A single-page birthday greeting for **Nikuze Ange**, made by **Serge**, built with React, TypeScript, Vite and Tailwind CSS v4. Midnight sky, a cake you can actually blow out, a wall of remembered moments, and a letter hidden in a gift box.

## Run it

```bash
cd frontend
npm install
npm run dev
```

Build for production with `npm run build`, preview with `npm run preview`.

## Make it theirs

All copy lives in [`src/config/birthday.ts`](src/config/birthday.ts). That is the only file you need to edit for a new person:

| Field | What it changes |
| --- | --- |
| `name` | The name in the hero, cake caption, letter and footer |
| `sender` | The signature on the letter and the hero |
| `hero.dateLabel` | The small date line above the headline |
| `hero.subline` | The paragraph under the name |
| `wish.*` | Cake heading, button labels and status messages |
| `memories.items` | The six cards: photos, dates, notes and chat lines |
| `letter.paragraphs` | The letter itself |
| `closing.*` | Footer copy and actions |

The memory photos live in [`public/memories`](public/memories) and are cropped to a 4:5 portrait from the supplied pictures. Replace a file and keep its name, or point `photo.src` at a new image, and update `photo.alt` to describe it.

## Interactions

- **Blow out the candles** — click, or use the microphone button and blow at the screen. A confetti burst fires from the cake.
- **Memory cards** — click or press Enter to flip each card between the photo and the memory.
- **Gift box** — click the tag to lift the lid and read the letter. Close it to wrap it back up.
- **Light the candles again** — resets the cake and returns to the wish section.

## Notes

- The microphone is never requested automatically. Denial leaves the click path intact.
- Confetti, floating stars, the flickering flames, the card flip and smooth scrolling all respect `prefers-reduced-motion`.
- Fonts: Fraunces, Manrope and Caveat, loaded from Google Fonts.
