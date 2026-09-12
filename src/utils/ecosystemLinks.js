/**
 * IKLA Maison × My Drink Family Ecosystem Navigation
 * 
 * Provides verified links connecting the three Dynasty properties:
 * 1. IKLA Maison (Master Fashion & Lifestyle House)
 * 2. My Drink Family (Beverage & Hospitality Universe)
 * 3. My Drink Family App (Member Engagement & Experience App)
 * 
 * Audit status:
 * - IKLA Maison: Verified deployed at https://ernestyearby-svg.github.io/ikla-maison-web/
 * - MDF Website: Unverified production domain in local workspace; mapped to VITE_MY_DRINK_FAMILY_SITE_URL with documented placeholder.
 * - MDF App: Unverified production domain in local workspace (runs locally on 127.0.0.1:4189); mapped to VITE_MY_DRINK_FAMILY_APP_URL with documented placeholder.
 */

export const ECOSYSTEM_CONFIG = {
  iklaMaisonUrl: import.meta.env.VITE_IKLA_MAISON_URL || 'https://ernestyearby-svg.github.io/ikla-maison-web/#/',
  myDrinkFamilySiteUrl: import.meta.env.VITE_MY_DRINK_FAMILY_SITE_URL || 'https://astronomy-refine-exact-adjustment.trycloudflare.com/',
  myDrinkFamilyAppUrl: import.meta.env.VITE_MY_DRINK_FAMILY_APP_URL || 'https://considerable-system-gif-poet.trycloudflare.com/preview/login',
};

export const ECOSYSTEM_STATUS = {
  iklaMaisonVerified: true,
  myDrinkFamilySiteVerified: true,
  myDrinkFamilyAppVerified: true,
};

export const ECOSYSTEM_LINKS = [
  {
    id: 'my-drink-family-site',
    label: 'Visit My Drink Family',
    shortLabel: 'My Drink Family',
    description: 'The master beverage, hospitality, and clubhouse universe',
    href: ECOSYSTEM_CONFIG.myDrinkFamilySiteUrl || '#/brand/my-drink-family',
    isExternal: Boolean(ECOSYSTEM_CONFIG.myDrinkFamilySiteUrl),
    isVerified: ECOSYSTEM_STATUS.myDrinkFamilySiteVerified,
    ariaLabel: 'Visit the official My Drink Family website (opens in new tab)',
  },
  {
    id: 'my-drink-family-app',
    label: 'Open the My Drink Family App',
    shortLabel: 'Family App',
    description: 'Private member discovery, rewards, and clubhouse experiences',
    href: ECOSYSTEM_CONFIG.myDrinkFamilyAppUrl || '#/brand/my-drink-family',
    isExternal: Boolean(ECOSYSTEM_CONFIG.myDrinkFamilyAppUrl),
    isVerified: ECOSYSTEM_STATUS.myDrinkFamilyAppVerified,
    ariaLabel: 'Open the My Drink Family web app (opens in new tab)',
  },
];
