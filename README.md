# Do You Know How To Spell?

A full-stack spelling game built with Next.js 16, Prisma, and SQLite.

## Setup

```bash
npm install
npm run db:setup    # migrate + seed
npm run dev
```

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Daily | `/` | One word per day, tracks streak & first-try |
| Practice | `/practice` | Free play with difficulty filter |
| Leaderboard | `/leaderboard` | Daily + Practice tabs |
| Admin | `/admin` | Hidden word manager (user: admin / pass: spell123) |

## Game Rules

| Difficulty | Max Tries | Hint appears after |
|------------|-----------|-------------------|
| Easy       | 5         | 2nd wrong attempt |
| Medium     | 4         | 1st wrong attempt |
| Hard       | 3         | 1st wrong attempt |

## API Routes

| Route | Method | Description |
|-------|--------|-------------|
| `/api/players` | POST | Create/find player by name |
| `/api/daily` | GET | Get today's challenge + player entry |
| `/api/daily` | POST | Submit daily result |
| `/api/daily-leaderboard` | GET | Today's daily rankings |
| `/api/words` | GET/POST | List all / add word |
| `/api/words/[id]` | DELETE/PATCH | Remove / update word |
| `/api/words/random` | GET | Random word (supports ?difficulty=) |
| `/api/scores` | GET/POST | Practice leaderboard |

## Admin Credentials

Change these in `app/admin/page.tsx`:
```
ADMIN_USER = "admin"
ADMIN_PASS = "spell123"
```
