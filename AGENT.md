# pre-portfolio

A personal "coming soon" / pre-launch portfolio page for Gilead Odo, displayed while the full portfolio is under development.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **UI Library**: Mantine v7 (`@mantine/core`, `@mantine/hooks`, `@mantine/notifications`)
- **Icons**: Tabler Icons (`@tabler/icons-react`)
- **Styling**: Tailwind CSS v3
- **Email**: SendGrid (`@sendgrid/mail`)
- **HTTP Client**: Axios
- **Package Manager**: pnpm (preferred), npm/yarn also present

## Project Structure

```
src/
  pages/
    index.tsx          # Home / landing page
    contact.tsx        # Contact form page
    _app.tsx           # App wrapper (Mantine provider setup)
    _document.tsx      # Custom document
    api/
      send-email.ts    # SendGrid email API route (active)
      email.ts         # Nodemailer email API route (alternative)
      hello.ts         # Default Next.js hello route
  hooks/
    useNotification.tsx  # Mantine notification helper hook
  styles/
    globals.css        # Global styles
public/                # Static assets
```

## Key Conventions

- Pages use the Next.js Pages Router (not App Router)
- Form validation is handled client-side in `contact.tsx` before submission
- API responses follow the shape `{ entity?: string; message: string }`
- Mantine components are used for UI elements; Tailwind is used for layout/spacing

## Environment Variables

| Variable           | Description                        |
|--------------------|------------------------------------|
| `SENDGRID_API_KEY` | SendGrid API key for sending email |

Set these in a `.env.local` file (not committed to git).

## Development

```bash
pnpm dev      # Start dev server (http://localhost:3000)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # Run ESLint
```

## Email Flow

Contact form (`/contact`) → `POST /api/send-email` → SendGrid → `odogilead@gmail.com`

- Sender address: `info@gileadodo.xyz`
- Email template is an inline HTML string in `send-email.ts`
- An alternative Nodemailer route exists at `api/email.ts` but is not currently used
