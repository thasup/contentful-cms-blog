import { defineCloudflareConfig } from '@opennextjs/cloudflare'
import r2IncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/r2-incremental-cache'

// ISR (getStaticProps + res.revalidate) stores rendered pages in R2.
export default defineCloudflareConfig({
  incrementalCache: r2IncrementalCache,
})
