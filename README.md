# 💝 Valentine's Day Card Generator 2026

A beautiful, interactive web application that generates personalized Valentine's Day cards with custom messages and stunning designs. Create heartfelt cards for your loved ones in seconds!

## ✨ Features

- **Personalized Messages**: Enter a recipient's name (optional) and choose from 7 different message styles:
  - 💕 Romantic
  - 😂 Funny
  - 💭 Deep
  - 😊 Shy
  - 🇬🇭 Ghana Slang
  - 📜 Classic
  - ✍️ Poetic

- **25 Unique Card Designs**: Each card is randomly selected from a collection of beautifully crafted designs with:
  - Elegant animations and transitions
  - Responsive layouts for all screen sizes
  - Stunning visual effects and gradients

- **Download & Share**: Download your generated card as a high-quality PNG image to share with your loved ones

- **Modern UI/UX**: 
  - Clean, intuitive interface
  - Smooth animations and transitions
  - Fully responsive design
  - Beautiful color schemes and typography

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd vals_day_2026
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Image Generation**: html-to-image
- **Font**: Geist (optimized via Next.js)

## 📁 Project Structure

```
vals_day_2026/
├── app/
│   ├── actions/           # Server actions for form processing
│   │   ├── processForm.ts
│   │   └── generate.card.ts
│   ├── cardDesigns/       # 25 unique card design components
│   │   ├── design1.tsx
│   │   ├── design2.tsx
│   │   └── ...
│   ├── valsMessages/     # Message templates by style
│   │   ├── romantic.ts
│   │   ├── funny.ts
│   │   ├── deep.ts
│   │   ├── shy.ts
│   │   ├── ghanaSlang.ts
│   │   ├── classic.ts
│   │   └── poetic.ts
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── public/               # Static assets
└── package.json
```

## 🎨 How It Works

1. **User Input**: Enter an optional recipient name and select a message style
2. **Message Generation**: The server action randomly selects a message from the chosen style's collection and personalizes it with the recipient's name
3. **Design Selection**: A random card design is selected from the 25 available designs
4. **Card Display**: The personalized card is displayed in a beautiful modal overlay
5. **Download**: Users can download the card as a PNG image

## 🎯 Usage

1. Visit the homepage
2. Enter the recipient's name (optional)
3. Select your preferred message style
4. Click "Generate Card"
5. View your personalized card
6. Click "Download" to save the card as an image

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/vals_day_2026)

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new card designs
- Add new message styles or messages
- Improve the UI/UX
- Fix bugs or optimize performance

## 📄 License

This project is private and not licensed for public use.

## 💌 Made with Love

Created for Valentine's Day 2026. Spread love and share beautiful cards with your loved ones! ❤️
