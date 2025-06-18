# Content Creator Interface

A web application for generating content in various writing styles based on writer templates.

## Features

- Style selection interface
- Content prompt input
- Generated content display
- Export options (copy to clipboard, download as text)
- History tracking

## Writing Styles Available

- Super Writer GPT (Tim Ferriss Style)
- Super Writer GPT (Tim Ferriss Style) + James Clear (20%)
- Insight Writer GPT (Shane Parrish Style)
- Brutally Honest GPT (Mark Manson Style)
- Idea Curator GPT (David Perell Style)

## Technical Implementation

- Frontend: React with TypeScript
- UI Components: shadcn-ui
- Styling: Tailwind CSS
- Build Tool: Vite
- Deployment: Lovable platform

## Development

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/dxaginfo/writer-style-content-generator.git
cd writer-style-content-generator

# Install dependencies
npm install
```

### Running the development server

```bash
npm run dev
```

This will start the development server at http://localhost:5173.

### Building for production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Deployment

This application is ready to deploy via Lovable platform.

1. Use the Share -> Publish option in Lovable
2. The deployment URL will be provided upon completion

## Testing Checklist

- [ ] Style selection functionality
- [ ] Content generation for each style
- [ ] Responsive design
- [ ] Error handling
- [ ] Export functionality

## License

MIT
