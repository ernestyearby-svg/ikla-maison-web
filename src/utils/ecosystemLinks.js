/**
 * IKLA Maison × My Drink Family × Dynasty Works Studio Ecosystem Navigation
 * 
 * Provides verified links connecting the official Crown Bridge / Dynasty properties:
 * 1. IKLA Maison: https://iklamaison.com/ (Master Fashion & Lifestyle House)
 * 2. My Drink Family: https://mydrinkfamily.com/ (Beverage & Hospitality Universe)
 * 3. My Drink Family App: https://mydrinkfamily.com/app (Member Engagement & Experience App)
 * 4. Dynasty Works Studio: https://dynastyworksstudio.com/ (Strategy, Brand & Digital Infrastructure)
 * 
 * Verified Official Domains:
 * - IKLA Maison: https://iklamaison.com/
 * - My Drink Family: https://mydrinkfamily.com/
 * - Dynasty Works Studio: https://dynastyworksstudio.com/
 */

export const ECOSYSTEM_CONFIG = {
  iklaMaisonUrl: import.meta.env.VITE_IKLA_MAISON_URL || 'https://iklamaison.com/',
  myDrinkFamilySiteUrl: import.meta.env.VITE_MY_DRINK_FAMILY_SITE_URL || 'https://mydrinkfamily.com/',
  myDrinkFamilyAppUrl: import.meta.env.VITE_MY_DRINK_FAMILY_APP_URL || 'https://mydrinkfamily.com/app',
  dynastyWorksStudioUrl: import.meta.env.VITE_DYNASTY_WORKS_STUDIO_URL || 'https://dynastyworksstudio.com/',
};

export const ECOSYSTEM_STATUS = {
  iklaMaisonVerified: true,
  myDrinkFamilySiteVerified: true,
  myDrinkFamilyAppVerified: true,
  dynastyWorksStudioVerified: true,
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
  {
    id: 'dynasty-works-studio',
    label: 'Dynasty Works Studio',
    shortLabel: 'Dynasty Works',
    description: 'Strategy, brand, digital infrastructure, and growth systems',
    href: ECOSYSTEM_CONFIG.dynastyWorksStudioUrl || 'https://dynastyworksstudio.com/',
    isExternal: true,
    isVerified: ECOSYSTEM_STATUS.dynastyWorksStudioVerified,
    ariaLabel: 'Visit Dynasty Works Studio official website (opens in new tab)',
  },
];
