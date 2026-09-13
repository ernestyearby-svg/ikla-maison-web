# Asset register

Round 2 · 2026-09-08 · INTERNAL · Founder review pending where stated.

Indexed 183 original source/content files, including 151 raster images. SOURCE_INDEX.json holds exact paths/sizes/SHA-256. ASSET_INDEX.json adds dimensions, formats and alpha-channel presence. Headers and a limited visual sample were checked; no blanket approval or origin/license verification performed.

Image groups: {'campaigns': 33, 'ikla-maison': 16, 'ktse': 16, 'moral-compass': 16, 'moteon': 16, 'my-drink-family': 16}. PNG/WebP logo pairs, JPG/WebP heroes and campaign crop/reference variants coexist. Different hashes do not prove artwork conflict; retain all and establish approval/purpose before selection. Names such as ready-to-use and comments claiming approval do not supply an approver/date/version record.

Literal asset-reference audit: 148 occurrences; 0 missing files. Campaign dimension mismatches against actual headers: 0. Dynamic references/runtime/network behavior are not completely covered by literal checks. Inspect AUDIT_DATA.json for exact mismatches and references. No video files or bundled font masters were found in the indexed content.

Known IKLA hero sources are native 1024×438 desktop and 576×1024 mobile in the inspected files. Do not claim higher native resolution. Logo filename dark/light describes a usage candidate, not verified contrast on every background. Approval remains PROVISIONAL / NEEDS_FOUNDER_CONFIRMATION.

Sources: exact paths and SHA-256 in 06_SOURCE_OF_TRUTH_REGISTER.md / SOURCE_INDEX.json; current founder request is preserved in the studio ROUND2_FOUNDER_REQUEST.txt.

## 2026-09-13 paired product-card editorials

- 22 optimized WebP storefront derivatives are staged under `public/assets/lookbook/product-hover/`.
- Source editorials remain preserved outside the production tree; no source image was overwritten.
- Pairings are governed by `src/data/productPresentation.js`: exact wardrobe matches take priority, followed by house-specific apparel editorials. Unmatched footwear, objects, and accessories deliberately remain single-image cards.
- The My Drink Family children’s ensemble was excluded from IKLA Kids presentation to preserve the founder-approved separation between IKLA Maison and My Drink Family.
