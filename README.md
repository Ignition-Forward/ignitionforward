# Ignition Forward

AI Enablement for Expert-Led Businesses.

## Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Build**: Vite 7
- **Deployment**: Docker, Nginx, Elestio

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Type check
pnpm check

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Docker

```bash
# Build image
docker build -t ignition-forward .

# Run container
docker run -p 80:80 ignition-forward

# Or use docker-compose
docker-compose up -d
```

## Deployment

### Elestio

1. Connect your GitHub repository to Elestio
2. Configure the webhook URL in GitHub Secrets as `ELESTIO_WEBHOOK_URL`
3. Push to `main` branch to trigger automatic deployment

### Manual Docker Deployment

```bash
# Pull and run
docker pull ghcr.io/YOUR_USERNAME/ignitionforward:latest
docker run -d -p 80:80 --name ignition-forward ghcr.io/YOUR_USERNAME/ignitionforward:latest
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Container port | `80` |
| `DOMAIN` | Production domain | `localhost` |

## Project Structure

```
├── client/
│   ├── public/          # Static assets
│   └── src/
│       ├── components/  # React components
│       ├── pages/       # Page components
│       ├── hooks/       # Custom hooks
│       ├── lib/         # Utilities
│       └── contexts/    # React contexts
├── .github/workflows/   # CI/CD
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
└── vite.config.ts
```

## License

MIT
