# IKLA Maison full-site audit — 2026-09-12

## Outcome

The site had strong imagery and editorial density, but its public experience behaved like an unverified conventional store. This pass changes the center of gravity to a modern private-client Maison: clear hierarchy, distinct page titles, inquiry-led acquisition, individual product imagery, and controlled expansion into IKLA Kids and Griffin Edition.

## Critical findings corrected

- Removed visible public pricing, stock counters, scarcity counters, Quick Add, shopping bag, and simulated checkout from the active experience.
- Replaced mock transactions with direct email and private-client appointment pathways.
- Corrected My Drink Family from an IKLA house to a separate connected hospitality platform.
- Preserved the hero house-navigation boxes, including Explore IKLA and direct house links.
- Split Shop and Accessories into distinct collection states.
- Added exact outbound links to the My Drink Family website and app.
- Replaced unsupported shipping, encryption, response-time, atelier-location, certification, and authenticity claims in active surfaces.
- Added unique document titles and an unknown-route fallback.
- Added an H1 to image-wordmark brand heroes and Escape/focus behavior to mobile navigation.

## Missing experiences added

- IKLA Kids core-collection page and six individual private-preview items.
- Griffin Edition teaser page for automotive, maritime, and broader commission direction.
- Ten individual IKLA Maison private-collection items across sleep, travel, bath, table, office, fragrance, handbag, tea, and salon textiles.
- A homepage “Private Worlds” gateway connecting IKLA Kids and Griffin Edition.
- Reassigned legacy product cards so every active catalogue record has a unique image reference.

## Remaining release gates

- Confirm the real concierge email inbox and any form backend before promising submission or response behavior.
- Confirm product specifications, materials, production partners, quantities, delivery, returns, and legal terms before publishing those as facts.
- Replace temporary Cloudflare URLs when permanent My Drink Family website/app URLs exist.
- Obtain explicit approval and rights records for final public imagery.
- Run the checked-in Playwright suite in an environment with its browser runtime installed.
- Consider route-level code splitting; the production bundle currently emits a large-chunk warning.
- Publishing to GitHub Pages is intentionally not performed by this audit.

## Verification

- `npm ci` completed from the repository lockfile.
- `npm run build` completed successfully with Vite 8.2.2.
- Active source scan found no `[Placeholder]`, `Quick Add`, public stock labels, `$350` shipping claims, simulated order confirmation, or cart-provider remnants.
- Product-image integrity scan found zero missing catalogue assets and zero duplicate catalogue image references.
