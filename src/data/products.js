import { getAssetPath } from '../utils/assets.js';

export const PRODUCTS = [
  // ==========================================
  // IKLA MAISON
  // ==========================================
  {
    id: 'ikla-track-jacket',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: '[Placeholder] Travertine Gold-Zip Track Jacket',
    price: 380,
    category: 'Outerwear',
    image: '/assets/ikla-maison/collection.webp',
    imageAlt: 'Ikla Maison Travertine Gold-Zip Track Jacket featured on collection flat lay',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Travertine Cream', hex: '#F0ECE1' },
      { name: 'Obsidian Black', hex: '#141414' }
    ],
    inventory: 8,
    isNew: true,
    isFeatured: true,
    description: 'A refined leisure silhouette tailored from double-faced organic cotton with gold metallic hardware and subtle gilded chest embroidery.',
    details: [
      'Two-way gilded metal front zipper',
      'Funnel collar with structured rib trim',
      'Discreet tonal Ikla Maison bullion chest embroidery',
      'Custom dyed in natural limestone cream'
    ],
    fabricCare: '100% Organic Cotton fleece with mercerized finish. Specialist dry clean recommended or gentle hand wash cold.',
    fitNotes: 'Relaxed contemporary tailoring. Model is 6\'1" wearing size Medium.'
  },
  {
    id: 'ikla-wide-leg-pants',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: '[Placeholder] Travertine Wide-Leg Pleated Track Pant',
    price: 290,
    category: 'Bottoms',
    image: '/assets/ikla-maison/collection.webp',
    imageAlt: 'Ikla Maison Travertine Wide-Leg Pleated Track Pant in collection flat lay',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Travertine Cream', hex: '#F0ECE1' },
      { name: 'Obsidian Black', hex: '#141414' }
    ],
    inventory: 12,
    isNew: true,
    isFeatured: true,
    description: 'Fluid architectural trousers engineered with a clean front pleat, drawstring waistband with gold aglets, and flowing wide-leg drop.',
    details: [
      'Elasticated waistband with braided drawcord and brass aglets',
      'Sharp pressed front crease line',
      'Embroidered thigh signature insignia',
      'Concealed side seam pockets'
    ],
    fabricCare: 'Heavyweight organic cotton knit. Dry clean or flat dry in shade.',
    fitNotes: 'Generous drape with elongated break. Fits true to size at waist.'
  },
  {
    id: 'ikla-crochet-polo',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: '[Placeholder] Open-Knit Textured Cabana Polo',
    price: 280,
    category: 'Tops',
    image: '/assets/ikla-maison/collection.webp',
    imageAlt: 'Ikla Maison Open-Knit Textured Cabana Polo in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian Black', hex: '#141414' }
    ],
    inventory: 5,
    isNew: false,
    isFeatured: true,
    description: 'Crafted with an intricate pointelle stitch pattern, relaxed camp collar, and horn buttons. Designed for seamless day-to-evening dressing.',
    details: [
      'Intricate vertical open-weave knit structure',
      'Camp collar with genuine natural horn buttons',
      'Gold Ikla Maison chest script signature',
      'Ribbed hem and sleeve cuffs'
    ],
    fabricCare: '100% Combed Mercerized Cotton. Hand wash cold, dry flat.',
    fitNotes: 'Standard regular luxury fit with slight drop shoulder.'
  },
  {
    id: 'ikla-hoodie-black',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: '[Placeholder] Gilded Signature Heavyweight Hoodie',
    price: 340,
    category: 'Tops',
    image: '/assets/ikla-maison/collection.webp',
    imageAlt: 'Ikla Maison Gilded Signature Heavyweight Hoodie in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Obsidian Black', hex: '#141414' },
      { name: 'Limestone Cream', hex: '#EBE7DC' }
    ],
    inventory: 14,
    isNew: true,
    isFeatured: false,
    description: 'Heavyweight loopback french terry hoodie featuring gold-tipped drawcords and precision chest embroidery.',
    details: [
      '480 GSM organic french terry construction',
      'Solid brass engraved drawcord tips',
      'Double-lined structured hood',
      'Clean kangaroo pocket with reinforced bar tacks'
    ],
    fabricCare: 'Machine wash cold inside out on gentle cycle. Hang dry.',
    fitNotes: 'Structured boxy fit.'
  },
  {
    id: 'ikla-tailored-trench',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: '[Placeholder] Architectural Longline Double Trench',
    price: 890,
    category: 'Outerwear',
    image: '/assets/ikla-maison/hero-desktop.webp',
    imageAlt: 'Ikla Maison Architectural Longline Double Trench worn in architectural descent',
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Obsidian Black', hex: '#141414' },
      { name: 'Alabaster White', hex: '#F9F8F5' }
    ],
    inventory: 4,
    isNew: true,
    isFeatured: true,
    description: 'As featured in our campaign visual, a dramatic longline overcoat with sculpted shoulder construction, storm flaps, and floor-sweeping presence.',
    details: [
      'Premium Italian virgin wool and cashmere blend',
      'Silk satin interior lining',
      'Concealed horn button placket and belted cuffs',
      'Deep back vent for fluid motion'
    ],
    fabricCare: 'Professional dry clean only.',
    fitNotes: 'Full-length dramatic silhouette. Tailored across shoulders.'
  },

  // ==========================================
  // KTSE
  // ==========================================
  {
    id: 'ktse-heavy-sweat-set',
    brandId: 'ktse',
    brandName: 'KTSE',
    name: '[Placeholder] 500GSM Raw-Hem Heavyweight Sweat Set',
    price: 360,
    category: 'Sets',
    image: '/assets/ktse/collection.webp',
    imageAlt: 'Ktse 500GSM Raw-Hem Heavyweight Sweat Set flat lay on concrete',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Charcoal', hex: '#2A2C30' },
      { name: 'Heather Concrete', hex: '#7E8289' },
      { name: 'Earth Umber', hex: '#584C43' },
      { name: 'Bone Chalk', hex: '#DDD9D0' }
    ],
    inventory: 9,
    isNew: true,
    isFeatured: true,
    description: 'Disciplined brutalist proportions in ultra-dense 500GSM loopback terry with distressed raw edges and tonal micro-embroidery.',
    details: [
      'Two-piece matching hoodie and cut-off sweatshorts',
      'Unfinished raw-edge hem that gently rolls over time',
      'Custom pigment vintage-dye treatment',
      'Reinforced gusset on shorts with heavy drawstring'
    ],
    fabricCare: 'Wash cold with like darks, do not bleach, tumble dry low.',
    fitNotes: 'Oversized streetwear drape. True to Ktse relaxed aesthetic.'
  },
  {
    id: 'ktse-boxy-tee',
    brandId: 'ktse',
    brandName: 'KTSE',
    name: '[Placeholder] Heavyweight Drop-Shoulder Boxy Tee',
    price: 120,
    category: 'Tops',
    image: '/assets/ktse/collection.webp',
    imageAlt: 'Ktse Heavyweight Drop-Shoulder Boxy Tee shown in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Washed Charcoal', hex: '#2A2C30' },
      { name: 'Earth Umber', hex: '#584C43' }
    ],
    inventory: 22,
    isNew: false,
    isFeatured: true,
    description: 'Substantial 320GSM single-jersey tee with thick rib collar and raw-cut hemline.',
    details: [
      '1.25" thick tight-knit collar ribbing',
      'Wide drop shoulder seam for monolithic drape',
      'Center-chest minimal Ktse stamp',
      'Pre-shrunk custom combed cotton'
    ],
    fabricCare: 'Cold water wash, hang to dry to preserve pigment wash.',
    fitNotes: 'Wide, boxy, heavyweight cut.'
  },
  {
    id: 'ktse-bone-hoodie',
    brandId: 'ktse',
    brandName: 'KTSE',
    name: '[Placeholder] Monolithic Bone Pullover Hoodie',
    price: 240,
    category: 'Tops',
    image: '/assets/ktse/hero-mobile.webp',
    imageAlt: 'Model wearing Ktse Monolithic Bone Pullover Hoodie in brutalist corridor',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Bone Chalk', hex: '#DDD9D0' },
      { name: 'Washed Charcoal', hex: '#2A2C30' }
    ],
    inventory: 11,
    isNew: true,
    isFeatured: true,
    description: 'As featured in our campaign, a sculptural bone-colored hoodie with double-walled hood and raw hem.',
    details: [
      'Dense 500 GSM loopback jersey',
      'Wide kangaroo pocket and drop sleeves',
      'Minimal chest micro-embroidery',
      'Unhemmed distressed waistband'
    ],
    fabricCare: 'Machine wash delicate cold. Lay flat to dry.',
    fitNotes: 'Generous streetwear fit.'
  },
  {
    id: 'ktse-denim-jorts',
    brandId: 'ktse',
    brandName: 'KTSE',
    name: '[Placeholder] Raw-Edge Heavyweight Denim Short',
    price: 160,
    category: 'Bottoms',
    image: '/assets/ktse/hero-desktop.webp',
    imageAlt: 'Models wearing Ktse Raw-Edge Denim Shorts in courtyard',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Faded Charcoal Denim', hex: '#33373E' },
      { name: 'Natural Ecru', hex: '#E3DFD5' }
    ],
    inventory: 7,
    isNew: true,
    isFeatured: false,
    description: '14oz Japanese cotton denim cut with a wide below-the-knee hem and frayed edge.',
    details: [
      '14oz rigid selvedge denim',
      'Custom gunmetal rivets and donut button fly',
      'Deep coin pocket and back patch pockets',
      'Hand-frayed raw hem'
    ],
    fabricCare: 'Wash inside out in cold water. Air dry.',
    fitNotes: 'Wide baggy skate silhouette falling just past the knee.'
  },

  // ==========================================
  // MOTEON
  // ==========================================
  {
    id: 'moteon-halter-set',
    brandId: 'moteon',
    brandName: 'Motéon',
    name: '[Placeholder] Riviera Halter Wrap Top & Palazzo Pant',
    price: 450,
    category: 'Sets',
    image: '/assets/moteon/collection.webp',
    imageAlt: 'Moteon Riviera Halter Wrap Top & Palazzo Pant on travertine flat lay',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Sun-Bleached Chalk', hex: '#F9F7F1' }
    ],
    inventory: 6,
    isNew: true,
    isFeatured: true,
    description: 'Signature Mediterranean resort silhouette featuring a neck-tie halter top with tortoiseshell ring buckle and flowing linen palazzo pants.',
    details: [
      'Hand-selected natural tortoiseshell ring clasp',
      'Cross-front wrap halter with adjustable tie neck',
      'High-waisted wide trousers with drawstring and side slash pockets',
      'Lightweight, breathable 100% European flax linen'
    ],
    fabricCare: 'Dry clean or hand wash cold with mild detergent. Steam to release creases.',
    fitNotes: 'Fluid, flattering resort drape. Model is 5\'10" wearing size Small.'
  },
  {
    id: 'moteon-crochet-shirt',
    brandId: 'moteon',
    brandName: 'Motéon',
    name: '[Placeholder] Open-Knit Short-Sleeve Resort Polo',
    price: 240,
    category: 'Tops',
    image: '/assets/moteon/collection.webp',
    imageAlt: 'Moteon Open-Knit Short-Sleeve Resort Polo on travertine flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Onyx Black', hex: '#161616' },
      { name: 'Linen Chalk', hex: '#F9F7F1' }
    ],
    inventory: 10,
    isNew: true,
    isFeatured: true,
    description: 'Open-gauge crochet knit shirt with short sleeves, relaxed resort collar, and genuine horn button front.',
    details: [
      'Artisanal open-stitch breathable crochet weave',
      'Camp collar silhouette suitable for layering or solo wear',
      'Natural horn button closure',
      'Hem woven with subtle Moteon brand tab'
    ],
    fabricCare: 'Delicate hand wash cold in protective bag. Dry flat in shade.',
    fitNotes: 'Relaxed resort fit with airy drape.'
  },
  {
    id: 'moteon-linen-trousers',
    brandId: 'moteon',
    brandName: 'Motéon',
    name: '[Placeholder] Pleated Mediterranean Linen Trousers',
    price: 250,
    category: 'Bottoms',
    image: '/assets/moteon/collection.webp',
    imageAlt: 'Moteon Pleated Mediterranean Linen Trousers on travertine flat lay',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Warm Taupe', hex: '#9E8F81' },
      { name: 'Sun-Bleached Chalk', hex: '#F9F7F1' }
    ],
    inventory: 15,
    isNew: false,
    isFeatured: true,
    description: 'Tailored from heavyweight Belgian linen with double front pleats and extended tab waistband.',
    details: [
      '100% pure washed linen with natural cooling properties',
      'Extended button-tab closure and belt loops',
      'Double reverse front pleats for thigh ease',
      'Unfinished hem length for custom tailoring'
    ],
    fabricCare: 'Machine wash delicate cold or dry clean. Hang dry.',
    fitNotes: 'Classic high-rise fit with relaxed straight leg.'
  },
  {
    id: 'moteon-villa-shirt',
    brandId: 'moteon',
    brandName: 'Motéon',
    name: '[Placeholder] Embroidered Open-Collar Knit Shirt',
    price: 230,
    category: 'Tops',
    image: '/assets/moteon/hero-mobile.webp',
    imageAlt: 'Model wearing Moteon Embroidered Open-Collar Knit Shirt descending villa stairs',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Chalk Cream', hex: '#F4EFE6' }
    ],
    inventory: 8,
    isNew: true,
    isFeatured: false,
    description: 'As featured in the villa steps campaign, a light knitted button-down with tonal hem embroidery.',
    details: [
      'Light gauge summer cotton-silk blend',
      'Subtle tonal Moteon hem embroidery',
      'Spread camp collar and mother-of-pearl buttons',
      'Side vents for comfortable movement'
    ],
    fabricCare: 'Hand wash cold, reshape and dry flat.',
    fitNotes: 'True to size breezy summer fit.'
  },

  // ==========================================
  // MORAL COMPASS
  // ==========================================
  {
    id: 'moral-compass-overcoat',
    brandId: 'moral-compass',
    brandName: 'Moral Compass',
    name: '[Placeholder] Celestial Navigation Wool Overcoat',
    price: 840,
    category: 'Outerwear',
    image: '/assets/moral-compass/collection.webp',
    imageAlt: 'Moral Compass Celestial Navigation Wool Overcoat flat lay showing compass star lining',
    sizes: ['38R', '40R', '42R', '44R'],
    colors: [
      { name: 'Midnight Onyx', hex: '#111214' }
    ],
    inventory: 5,
    isNew: true,
    isFeatured: true,
    description: 'Tailored heavy wool double-breasted overcoat lined in bespoke celestial gold compass jacquard silk, finished with peaked lapels.',
    details: [
      'Heavyweight virgin melton wool exterior',
      'Full interior lining in custom gold astronomical compass jacquard',
      'Gilded four-pointed star lapel brooch included',
      'Structured padded shoulders and deep interior passport pockets'
    ],
    fabricCare: 'Specialist dry clean only. Store on wide contoured hanger.',
    fitNotes: 'Sharp, tailored silhouette. Order one size up for layering over thick knitwear.'
  },
  {
    id: 'moral-compass-star-crewneck',
    brandId: 'moral-compass',
    brandName: 'Moral Compass',
    name: '[Placeholder] Gilded Compass Star French Terry Crewneck',
    price: 220,
    category: 'Tops',
    image: '/assets/moral-compass/collection.webp',
    imageAlt: 'Moral Compass Gilded Compass Star French Terry Crewneck in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Alabaster Bone', hex: '#F2EFE9' }
    ],
    inventory: 14,
    isNew: true,
    isFeatured: true,
    description: 'Heavyweight organic loopback sweatshirt adorned with an embroidered golden navigational star insignia at the left chest.',
    details: [
      'Dense 460GSM loopback cotton',
      'Precision metallic gold thread star embroidery',
      'Thick bound collar and elongated ribbed cuffs',
      'Raglan back sleeve for ergonomic comfort'
    ],
    fabricCare: 'Machine wash delicate cold inside out. Reshape and flat dry.',
    fitNotes: 'Modern boxy fit with slightly cropped body length.'
  },
  {
    id: 'moral-compass-burgundy-knit',
    brandId: 'moral-compass',
    brandName: 'Moral Compass',
    name: '[Placeholder] Cardinal Heavyweight Ribbed Wool Sweater',
    price: 290,
    category: 'Tops',
    image: '/assets/moral-compass/collection.webp',
    imageAlt: 'Moral Compass Cardinal Heavyweight Ribbed Wool Sweater in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Cardinal Crimson', hex: '#581822' }
    ],
    inventory: 7,
    isNew: false,
    isFeatured: true,
    description: 'Substantial chunky fisherman rib knit spun from 100% merino wool in deep cardinal crimson.',
    details: [
      '7-gauge heavy merino wool construction',
      'Double-thick mock crewneck collar',
      'Thermal insulating thermal stitch',
      'Natural elasticity for shape retention'
    ],
    fabricCare: 'Hand wash cold with wool wash only. Roll in towel and dry flat.',
    fitNotes: 'Structured, cozy fit with comfortable stretch.'
  },
  {
    id: 'moral-compass-trousers',
    brandId: 'moral-compass',
    brandName: 'Moral Compass',
    name: '[Placeholder] Pleated Wool Trousers with Compass Key Fob',
    price: 340,
    category: 'Bottoms',
    image: '/assets/moral-compass/collection.webp',
    imageAlt: 'Moral Compass Pleated Wool Trousers with Compass Key Fob on black marble flat lay',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Midnight Onyx', hex: '#111214' }
    ],
    inventory: 9,
    isNew: true,
    isFeatured: false,
    description: 'Tailored pleated trousers complete with a detachable solid brass navigational compass charm suspended from the belt loop.',
    details: [
      'High-twist wool gabardine that resists creasing',
      'Detachable solid brass celestial compass fob accessory',
      'Double forward pleats with neat turn-up cuff hem',
      'Curved waistband with interior curtain lining'
    ],
    fabricCare: 'Dry clean recommended.',
    fitNotes: 'Mid-rise with gently tapered leg opening.'
  },

  // ==========================================
  // MY DRINK FAMILY
  // ==========================================
  {
    id: 'mdf-crest-hoodie',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: '[Placeholder] Circular Crest Heavyweight Club Hoodie',
    price: 180,
    category: 'Tops',
    image: '/assets/my-drink-family/collection.webp',
    imageAlt: 'My Drink Family Circular Crest Heavyweight Club Hoodie in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Midnight Black', hex: '#151516' },
      { name: 'Sunset Cream', hex: '#F0ECE1' }
    ],
    inventory: 18,
    isNew: true,
    isFeatured: true,
    description: 'Heavyweight fleece hoodie celebrating unity and community, featuring the circular My Drink Family emblem embossed and embroidered on the chest.',
    details: [
      '420 GSM brushed back organic fleece',
      'Embroidered circular Family Crest medallion',
      'Braided drawcords with matte brass eyelets',
      'Ribbed side body stretch gussets'
    ],
    fabricCare: 'Machine wash cold with like colors, tumble dry low.',
    fitNotes: 'True to size classic street-lounge fit.'
  },
  {
    id: 'mdf-varsity-jacket',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: '[Placeholder] Emerald Satin Embroidered Varsity Jacket',
    price: 320,
    category: 'Outerwear',
    image: '/assets/my-drink-family/collection.webp',
    imageAlt: 'My Drink Family Emerald Satin Varsity Jacket with crest in flat lay',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Deep Emerald', hex: '#163D39' }
    ],
    inventory: 6,
    isNew: true,
    isFeatured: true,
    description: 'Lustrous emerald satin jacket with striped ribbed collar and cuffs, snap button front, and circular chest patch.',
    details: [
      'Glossy heavyweight satin shell with quilted satin lining',
      'Cream and gold striped ribbed baseball collar and cuffs',
      'Stitched chest crest insignia',
      'Heavy duty enameled brass snap buttons'
    ],
    fabricCare: 'Dry clean only to maintain satin luster.',
    fitNotes: 'Heritage varsity bomber silhouette.'
  },
  {
    id: 'mdf-crest-cap',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: '[Placeholder] Sunset Orange Crest Twill Ball Cap',
    price: 65,
    category: 'Accessories',
    image: '/assets/my-drink-family/collection.webp',
    imageAlt: 'My Drink Family Sunset Orange Crest Twill Ball Cap on collection flat lay',
    sizes: ['One Size Adjustable'],
    colors: [
      { name: 'Sunset Amber', hex: '#E06D38' },
      { name: 'Forest Teal', hex: '#184743' }
    ],
    inventory: 25,
    isNew: false,
    isFeatured: true,
    description: 'Six-panel washed cotton twill cap featuring the My Drink Family circular emblem patch and an adjustable brass buckle strap.',
    details: [
      '100% garment-washed cotton twill',
      'Embroidered woven circular crest patch on crown',
      'Curved brim with tonal topstitching',
      'Antique brass slide buckle closure'
    ],
    fabricCare: 'Spot clean with damp cloth.',
    fitNotes: 'Unisex structured six-panel profile, fully adjustable.'
  },
  {
    id: 'mdf-crest-tee',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: '[Placeholder] Golden Hour Heritage Crest Tee',
    price: 85,
    category: 'Tops',
    image: '/assets/my-drink-family/collection.webp',
    imageAlt: 'My Drink Family Golden Hour Heritage Crest Tee in collection flat lay',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Natural Bone', hex: '#F1EDE4' },
      { name: 'Sunset Amber', hex: '#E06D38' }
    ],
    inventory: 30,
    isNew: true,
    isFeatured: false,
    description: '280GSM heavy combed cotton tee screen-printed with the bold signature circular family emblem on the chest.',
    details: [
      '280 GSM premium combed jersey',
      'High density screenprint and gold foil accents',
      'Pre-washed for a soft broken-in hand feel',
      'Seamless double-needle collar'
    ],
    fabricCare: 'Machine wash cold, turn inside out, tumble dry low.',
    fitNotes: 'Relaxed boxy fit.'
  }
];

PRODUCTS.forEach(product => {
  if (product.image) {
    product.image = getAssetPath(product.image);
  }
});

export const CATEGORIES = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Sets', 'Accessories'];

