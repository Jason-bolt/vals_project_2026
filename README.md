# 💝 Valentine's Day Card Generator 2026

A small Next.js app that generates a Valentine message and renders it in a randomly chosen (and browsable) set of card designs. You can download the final card as a PNG.

## Features

- **Message styles**: Romantic, Funny, Deep, Shy, Ghana Slang, Classic, Poetic
- **25 card designs**: Randomly picked on generation, with next/previous navigation
- **Download as PNG**: Uses `html-to-image` to export the rendered card
- **Optional analytics**: Google Tag Manager + Google Analytics (only enabled if env vars are set)

## Getting started

### Prerequisites

- Node.js 18+

### Install + run

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Environment variables (optional)

This project ignores `.env*` by default (see `.gitignore`). Create a `.env.local` at the repo root if you want analytics:

```bash
# Optional. If unset/empty, GTM is not injected.
NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX

# Optional. If unset/empty, GA is not injected.
NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Project structure

```
vals_day_2026/
├── app/
│   ├── actions/
│   │   ├── processForm.ts        # Server action: reads form input
│   │   └── generate.card.ts      # Message selection + personalization
│   ├── cardDesigns/              # 25 design components
│   ├── valsMessages/             # Message pools per style
│   ├── layout.tsx                # Injects GTM/GA (optional)
│   └── page.tsx                  # UI + design selection + download
└── public/
```

## How message generation works

- The chosen style maps to a list of strings in `app/valsMessages/`.
- If a recipient name is provided, the generator prefers messages containing `{name}` and substitutes it.
- If no recipient is provided, it chooses from messages without `{name}`.

## Extending the app

### Add or edit messages

- Edit the arrays in `app/valsMessages/*.ts`.
- Messages can include `{name}` to support personalization.

### Add a new message style

- Add a new file under `app/valsMessages/`.
- Update the `Style` union + `messages` map in `app/actions/generate.card.ts`.
- Add the new option to the `<select name="style">` in `app/page.tsx`.

### Add a new card design

- Create `app/cardDesigns/design26.tsx` (or similar).
- Import it in `app/page.tsx` and append it to the `designs` array.

## Scripts

- `npm run dev`: start the dev server
- `npm run build`: production build
- `npm run start`: run the production server
- `npm run lint`: run ESLint

## Deployment

Deploy anywhere you can run a Next.js app. If you use Vercel, remember to set the optional env vars in the Vercel project settings (or leave them unset to disable analytics).

## License

This project is private and not licensed for public use.
