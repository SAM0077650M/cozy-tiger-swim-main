# BlogGenie AI

A production-ready web application that generates SEO-optimized blog posts using AI. Built with React, Vite, and Tailwind CSS.

## Features

- Generate SEO-optimized blog posts with title, meta description, and keywords
- Adjustable word count (100-2000 words)
- Batch mode to generate multiple blogs in one request (currently disabled for Markdown output)
- Export as Markdown or copy to clipboard
- Dark/light mode support
- Responsive design for all devices
- Modern, clean SaaS-style UI

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bloggenie-ai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Get your OpenRouter API key:
   - Visit [OpenRouter](https://openrouter.ai/keys) to create an account
   - Generate a new API key
   - New accounts get $1 free credit to get started

4. Create a `.env` file in the root directory:
   ```env
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:8080`

## Deployment

### Vercel Deployment

1. Push your code to a GitHub repository
2. Sign up/login to [Vercel](https://vercel.com)
3. Create a new project and import your GitHub repository
4. Add your `VITE_OPENROUTER_API_KEY` as an environment variable in the Vercel dashboard
5. Deploy!

### Environment Variables

For deployment, make sure to set the following environment variable:
- `VITE_OPENROUTER_API_KEY`: Your OpenRouter API key

## Usage Notes

### Free OpenRouter Quotas

- New accounts receive $1 free credit
- Check your usage in the OpenRouter dashboard
- Each blog generation request costs approximately $0.0001-0.0003

### Cost Control

- Adjust word count to control costs (shorter blogs cost less)
- Monitor your usage in the OpenRouter dashboard

## Technologies Used

- React with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- OpenRouter API for AI generation
- shadcn/ui components
- React Router for navigation

## Project Structure

```
src/
├── components/     # Reusable UI components (Header, Footer, BlogOutput, shadcn/ui)
├── pages/          # Page components (Index, BlogGenerator, NotFound)
├── api/            # API functions (generate-blog)
├── utils/          # Utility functions (toast)
└── lib/            # Library functions (utils)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## License

This project is licensed under the MIT License.