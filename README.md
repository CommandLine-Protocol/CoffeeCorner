# CoffeeCorner: Session 1 Take-Home Assignment

## Objective
Implement dynamic database fetching for the single-vendor drink and snack counter using Supabase PostgreSQL.

## Instructions
1. Create a branch: `git checkout -b feature/s1-drink-catalog`
2. Create `migrations/01_create_items.sql` with table `items (id, name, price_ugx, category, is_available)`.
3. Enable RLS and add a policy allowing public `SELECT` queries.
4. Execute the migration in your personal Supabase project.
5. Populate `.env` with your project URL and anonymous key.
6. Update `src/App.jsx` to fetch data dynamically using `supabase.from('items').select('*')`.
7. Commit using conventional commits: `feat: implement drink catalog and supabase schema`.
8. Push your branch, open a PR, and attach a verification screenshot.