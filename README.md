# Spelldle

A daily spelling game. Listen to a word via text-to-speech, spell it out letter by letter, and compete on the leaderboard.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Database:** Neon PostgreSQL via Prisma 7
- **Language:** TypeScript
- **Fonts:** DM Sans + DM Mono (Google Fonts)

## Pages

| Route | Description |
|---|---|
| `/` | Daily challenge — one word per day, tracked streak |
| `/practice` | Free play with Easy / Medium / Hard filter |
| `/leaderboard` | Daily + Practice rankings |
| `/admin` | Hidden word manager (password protected) |

## Game Rules

| Difficulty | Max Tries | Hint appears after |
|---|---|---|
| Easy | 5 | 2nd wrong attempt |
| Medium | 4 | 1st wrong attempt |
| Hard | 3 | 1st wrong attempt |

Daily challenge auto-selects a random hard word if admin hasn't set one.

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

```env
# Neon PostgreSQL connection string
DATABASE_URL="postgresql://user:password@host/db?sslmode=require"

# Admin panel — set strong values before deploying
ADMIN_USER="admin"
ADMIN_PASS="your_strong_password"
ADMIN_TOKEN="your_random_secret_token_32chars_min"
```

### 3. Run database migrations and seed

```bash
npm run db:migrate    # creates tables in Neon
npm run db:generate   # generates Prisma client
npm run db:seed       # seeds 660+ words (easy / medium / hard)
```

Or all at once:

```bash
npm run db:setup
```

### 4. Start development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## API Routes

| Route | Method | Auth | Description |
|---|---|---|---|
| `/api/players` | POST | — | Create or find player by name |
| `/api/daily` | GET | — | Get today's challenge + player entry |
| `/api/daily` | POST | — | Submit daily result |
| `/api/daily-leaderboard` | GET | — | Today's daily rankings |
| `/api/words` | GET | — | List all words |
| `/api/words` | POST | — | Add a word |
| `/api/words/[id]` | DELETE | — | Delete a word |
| `/api/words/random` | GET | — | Random word (`?difficulty=`) |
| `/api/scores` | GET | — | Practice all-time leaderboard |
| `/api/scores` | POST | — | Save practice score |
| `/api/admin/auth` | POST | — | Validate admin credentials, returns token |
| `/api/admin/daily` | GET/POST | Token | Get / set today's daily word |

## Deploying to Vercel

1. Push to GitHub
2. Import into Vercel
3. Add environment variables in **Vercel → Project → Settings → Environment Variables**:
   - `DATABASE_URL`
   - `ADMIN_USER`
   - `ADMIN_PASS`
   - `ADMIN_TOKEN`
4. Deploy

## Security Notes

- Admin credentials are environment variables only — never hardcoded in source
- Admin API routes require `x-admin-token` header matching `ADMIN_TOKEN` env var
- Login endpoint has an 800ms delay on failure to slow brute force
- `.env` is gitignored — never commit it
- Generated Prisma client (`src/generated/`) is gitignored

## Word Bank

The seed contains **660+ words** across three difficulties:
- Easy: 15 words
- Medium: 20 words  
- Hard: 625+ words (used for daily challenges)

Add more words via the admin panel at `/admin`.
