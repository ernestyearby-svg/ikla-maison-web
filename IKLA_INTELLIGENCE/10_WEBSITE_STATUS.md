# Website status

Round 2 · 2026-09-08 · INTERNAL · Founder review pending where stated.

Read-only static source audit plus native asset metadata and three visual spot-checks. No browser session, build, runtime testing or production deployment verification was performed; findings describe inspected implementation and release risks, not observed live incidents.

Framework: React 19, Vite 8, Tailwind 4, JSX. Vite base /ikla-maison-web/. Hash-driven views in App.jsx: #/ home, #/brand/<id>, #/collection, #/about, #/contact and #/product/<id> opening a modal. Brand IDs: ikla-maison, ktse, moteon, moral-compass, my-drink-family, ikla-water. Product selection also opens local modal state without always setting a product hash.

Navigation: The Houses dropdown, Collections, The Maison, Concierge, search and bag; mobile slide-over with home/collection and represented entries. Current BRAND_LIST contains the old five, with IKLA Water separately exposed as Concept. MDF membership is legacy, not a current official house.

Fonts/logos: six Google families; Cormorant/Manrope dominant, image wordmark/crest variants plus text navbar. Mobile source breakpoint 768/769 px, desktop navigation at lg; full-height heroes and object-cover need runtime crop validation. Reduced-motion CSS covers named animations but global smooth-scroll and every transition were not fully tested.

Asset checks: 148 literal references, 0 missing; 0 campaign dimension mismatches. No guarantee for all dynamic paths or remote font loading. See source fingerprints and audit JSON.

| ID | Severity | Source / finding | Required next decision or validation |
|---|---|---|---|
| W01 | CRITICAL | CheckoutModal.jsx creates a random order ID, clears local cart and displays Order Confirmed/Total Settled/tracking-sent claims without transaction calls in that handler. | Treat as simulated; approve real backend scope or clear demo treatment before public transactional use. No live commerce assurance. |
| W02 | HIGH | README, index metadata, brands.js/BRAND_LIST, Navbar/MobileMenu, Home/About/Contact and other components place MDF in old five-house structure. | LEGACY / SUPERSEDED ARCHITECTURE — FOUNDER REVIEW REQUIRED BEFORE CODE MODIFICATION. |
| W03 | HIGH | ContactPage.jsx generates local inquiry code and submitted state; response-time/concierge claims lack supporting service evidence. | Define actual delivery/service behavior or explicit demo status before release. |
| W04 | HIGH | Placeholder product names, prices/stock, organic/certified materials, geographic origins, water provenance, shipping and encryption claims lack evidence. | Substantiate or approve correction scope; code is not canon. |
| W05 | MEDIUM | MobileMenu dialog has no focus-trap/Escape management visible in inspected component; navbar home is clickable div; dropdown expanded state lacks accessible binding. | Keyboard/focus audit and appropriate fixes in later authorized work. Static finding, not full accessibility certification. |
| W06 | MEDIUM | App hash handling lacks explicit unknown-route fallback; empty hash returns before clearing selected product. | Test direct links/back/home behavior and decide expected fallback. |
| W07 | MEDIUM | BrandHero marks all picture sources image/webp, while IKLA Water source is JPG; mobile image can use desktop alt text. | Correct source-format/alternative-text handling in authorized task. |
| W08 | MEDIUM | Six font families loaded; motion/blur/large imagery and global smooth scroll warrant performance/reduced-motion review. | Source includes named animation opt-outs; runtime performance/crop checks still needed. |
| W09 | FOUNDER_DECISION | Ready/approved-for-placement source notes have no separately verified approver/version evidence. | Reconcile approvals and rights before selecting masters. |
| W10 | FOUNDER_DECISION | README suggests Vercel; workflow specifies GitHub Pages and Vite base /ikla-maison-web/. | Confirm authoritative deployed target; no deploy/push performed. |
| W11 | POLISH | Text navbar/logo variants, repeated seals, five-house microcopy and collection-image reuse need a coherent final treatment. | Preserve sources; approve visual hierarchy after roster decision. |


CRITICAL means a serious implementation release risk if presented as a live service; this audit does not establish that the site is publicly deployed. No automatic repairs were made.

Sources: exact paths and SHA-256 in 06_SOURCE_OF_TRUTH_REGISTER.md / SOURCE_INDEX.json; current founder request is preserved in the studio ROUND2_FOUNDER_REQUEST.txt.
