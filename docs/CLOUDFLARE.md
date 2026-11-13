# Deploying to Cloudflare Workers

The blog runs on Cloudflare Workers through the OpenNext adapter (`@opennextjs/cloudflare`).
ISR pages are cached in the R2 bucket `blog-next-cache`.

## One-time setup
1. Create the R2 bucket named `blog-next-cache` (Cloudflare dashboard > R2).
2. Create a Workers project from this repo (Workers & Pages > Create > Import a repository).
   - Build command: `npx opennextjs-cloudflare build`
   - Deploy command: `npx opennextjs-cloudflare deploy`
3. Set these as both build variables and runtime variables (secrets for the tokens): `CONTENTFUL_SPACE_ID`,
   `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_SECRET`,
   `CONTENTFUL_REVALIDATE_SECRET`.
4. Add `blog.thanachon.me` under the Worker's Settings > Domains & Routes > Custom domain.

## Local
- `npm run preview` builds and runs the Worker in workerd.
- `npm run deploy` builds and deploys with wrangler.

## Contentful webhook
Keep the `x-vercel-reval-key` header (value = `CONTENTFUL_REVALIDATE_SECRET`) and point the webhook URL at
`https://blog.thanachon.me/api/revalidate`.

`_redirects` is a Netlify file and is ignored on Cloudflare; delete it once Netlify is retired.
