import { getAssetPath } from '../utils/assets.js';

const appointmentProduct = (id, name, subgroup, image, status, material) => ({
  id,
  brandId: 'ikla-maison',
  brandName: 'IKLA Maison',
  houseName: 'IKLA Maison',
  name,
  category: 'Accessories',
  collection: 'Private Appointments',
  subgroup,
  image: getAssetPath(`assets/appointments/${image}`),
  imageAlt: `${name}, presented for IKLA Maison private clients`,
  sizes: ['Private specification'],
  colors: [{ name: 'Maison specification', hex: '#0F2E22' }],
  material,
  accessMode: status,
  status,
  cta: 'Request Access',
  isAppointment: true,
  isReserve: true,
  description: `${name} is offered through an appointment-led private allocation with final materials and specifications confirmed by client relations.`,
  details: [
    'Individually presented; never mass listed',
    'Final material and monogram options confirmed privately',
    'Availability subject to Maison allocation'
  ],
  fabricCare: 'Care protocol supplied with the completed allocation.',
  fitNotes: 'Final dimensions are confirmed during the private appointment.'
});

export const IKLA_MAISON_APPOINTMENTS_PRODUCTS = [
  appointmentProduct('ikla-architectural-eyewear', 'Architectural Eyewear', 'Maison Appointments', 'ikla-architectural-eyewear.webp', 'Private Allocation', 'Acetate, mineral lenses and fitted leather case'),
  appointmentProduct('ikla-silk-tie-pocket-square-set', 'The Formal Appointment Set', 'Maison Appointments', 'ikla-silk-tie-pocket-square-set.webp', 'Special Order', 'Como silk, wool canvas and satin-finished brass'),
  appointmentProduct('ikla-onyx-cufflink-stud-set', 'Onyx Evening Studs', 'Maison Appointments', 'ikla-onyx-cufflink-stud-set.webp', 'Private Allocation', 'Natural black onyx and gold vermeil'),
  appointmentProduct('ikla-leather-belt-cardholder-key-sleeve', 'Leather Essentials Set', 'Maison Appointments', 'ikla-leather-belt-cardholder-key-sleeve.webp', 'Special Order', 'French box calfskin and restrained gold hardware')
];

export const IKLA_TRAVEL_RITUALS_PRODUCTS = [
  appointmentProduct('ikla-private-travel-document-set', 'Private Travel Document Set', 'Private Travel Rituals', 'ikla-private-travel-document-set.webp', 'Private Allocation', 'Calfskin, suede and archival paper'),
  appointmentProduct('ikla-watch-roll-jewelry-envelope', 'Travel Watch and Jewelry Case', 'Private Travel Rituals', 'ikla-watch-roll-jewelry-envelope.webp', 'Special Order', 'Leather, suede and protective microfiber'),
  appointmentProduct('ikla-driving-gloves-silk-scarf', 'Driving Gloves and Silk Scarf', 'Private Travel Rituals', 'ikla-driving-gloves-silk-scarf.webp', 'Private Preview', 'Perforated lambskin and printed silk twill'),
  appointmentProduct('ikla-automatic-umbrella', 'Maison Automatic Umbrella', 'Private Travel Rituals', 'ikla-automatic-umbrella.webp', 'Special Order', 'Technical canopy, walnut and metal hardware')
];

export const IKLA_APPOINTMENTS_PRODUCTS = [
  ...IKLA_MAISON_APPOINTMENTS_PRODUCTS,
  ...IKLA_TRAVEL_RITUALS_PRODUCTS
];
