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
    imageAlt: 'Motéon Riviera Halter Wrap Top & Palazzo Pant on travertine flat lay',
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
    imageAlt: 'Motéon Open-Knit Short-Sleeve Resort Polo on travertine flat lay',
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
      'Hem woven with subtle Motéon brand tab'
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
    imageAlt: 'Motéon Pleated Mediterranean Linen Trousers on travertine flat lay',
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
    imageAlt: 'Model wearing Motéon Embroidered Open-Collar Knit Shirt descending villa stairs',
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
      'Subtle tonal Motéon hem embroidery',
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
  },

  // ==========================================
  // WNNR (WIN WITHIN)
  // ==========================================
  {
    id: 'wnnr-discipline-hoodie',
    brandId: 'wnnr',
    brandName: 'WNNR',
    name: '[Placeholder] WNNR Heavyweight Discipline Loopback Hoodie',
    price: 320,
    category: 'Outerwear',
    image: 'assets/campaigns/round-one/wnnr-product-collection.webp',
    imageAlt: 'WNNR Heavyweight Discipline Loopback Hoodie displayed on product collection flat lay',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Obsidian Black', hex: '#0D0F0E' },
      { name: 'Bone Cream', hex: '#F4F1EA' },
      { name: 'Deep Forest', hex: '#1B2E24' }
    ],
    inventory: 14,
    isNew: true,
    isFeatured: true,
    description: 'Sculpted from 520 GSM custom-milled loopback French terry with architectural drop-shoulder balance, double-layer structured hood, and tonal high-density WNNR chest stamp.',
    details: [
      '520 GSM dense loopback French terry',
      'Discreet high-density tonal WNNR chest stamp',
      'Reinforced rib side gussets and cuffs',
      'Gilded brass eyelets with tonal braided drawcords'
    ],
    fabricCare: 'Dry clean or cold wash gentle inside-out. Lay flat to dry.',
    fitNotes: 'Structured oversized fit. Fits true to size with athletic volume.'
  },
  {
    id: 'wnnr-tapered-jogger',
    brandId: 'wnnr',
    brandName: 'WNNR',
    name: '[Placeholder] WNNR Monolithic Tapered Jogger',
    price: 260,
    category: 'Bottoms',
    image: 'assets/campaigns/round-one/wnnr-product-collection.webp',
    imageAlt: 'WNNR Monolithic Tapered Jogger displayed on product collection flat lay',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Obsidian Black', hex: '#0D0F0E' },
      { name: 'Bone Cream', hex: '#F4F1EA' },
      { name: 'Deep Forest', hex: '#1B2E24' }
    ],
    inventory: 18,
    isNew: true,
    isFeatured: true,
    description: 'Heavyweight organic cotton sweatpants with clean vertical darting, concealed zip pockets, and clean ankle cuff tailored for active transit and focused downtime.',
    details: [
      'Encased elastic waistband with braided drawcord',
      'Concealed waterproof zip utility pockets',
      'Tonal micro-embroidered WIN WITHIN thigh insignia',
      'Clean ribbed ankle cuffs'
    ],
    fabricCare: 'Machine wash cold gentle. Do not tumble dry.',
    fitNotes: 'Tailored athletic taper through leg with generous seat.'
  },
  {
    id: 'wnnr-victory-tee',
    brandId: 'wnnr',
    brandName: 'WNNR',
    name: '[Placeholder] WNNR Internal Victory Heavyweight Tee',
    price: 130,
    category: 'Tops',
    image: 'assets/campaigns/round-one/wnnr-product-collection.webp',
    imageAlt: 'WNNR Internal Victory Heavyweight Tee displayed on product collection flat lay',
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Bone Cream', hex: '#F4F1EA' },
      { name: 'Obsidian Black', hex: '#0D0F0E' }
    ],
    inventory: 24,
    isNew: true,
    isFeatured: false,
    description: '300 GSM combed jersey t-shirt with ribbed high-crew collar and discrete rear neck tonal WIN WITHIN silicon emblem.',
    details: [
      '300 GSM dense combed single jersey',
      'High-rib collar that maintains structure after laundering',
      'Blind stitched sleeves and hem',
      'Discreet rear neck silicon WIN WITHIN stamp'
    ],
    fabricCare: 'Wash cold, line dry in shade.',
    fitNotes: 'Drop-shoulder architectural boxy fit.'
  },
  {
    id: 'wnnr-weekender-bag',
    brandId: 'wnnr',
    brandName: 'WNNR',
    name: '[Placeholder] WNNR Execution Canvas & Leather Weekender',
    price: 490,
    category: 'Accessories',
    image: 'assets/campaigns/round-one/wnnr-product-collection.webp',
    imageAlt: 'WNNR Execution Canvas & Leather Weekender displayed on product collection flat lay',
    sizes: ['One Size'],
    colors: [
      { name: 'Obsidian & Forest', hex: '#0D0F0E' }
    ],
    inventory: 8,
    isNew: true,
    isFeatured: true,
    description: 'Architectural travel holdall constructed from 24oz water-repellent cotton duck canvas with full-grain bridle leather handles and brushed brass hardware.',
    details: [
      '24oz water-resistant heavyweight canvas',
      'Full-grain Italian bridle leather straps and base trim',
      'Separate vented shoe and workout apparel compartment',
      'Embossed leather luggage tag with gilded WNNR crest'
    ],
    fabricCare: 'Professional leather and canvas specialist care only.',
    fitNotes: 'Generous 48-hour capacity; cabin luggage compliant.'
  },
  {
    id: 'wnnr-slide-sock-set',
    brandId: 'wnnr',
    brandName: 'WNNR',
    name: '[Placeholder] WNNR Recovery Slide & Ribbed Crew Sock Set',
    price: 140,
    category: 'Accessories',
    image: 'assets/campaigns/round-one/wnnr-product-collection.webp',
    imageAlt: 'WNNR Recovery Slide and Ribbed Crew Sock Set displayed on product collection flat lay',
    sizes: ['38-39', '40-41', '42-43', '44-45'],
    colors: [
      { name: 'Bone Cream', hex: '#F4F1EA' },
      { name: 'Obsidian Black', hex: '#0D0F0E' }
    ],
    inventory: 30,
    isNew: true,
    isFeatured: false,
    description: 'Anatomic recovery slide molded from dual-density EVA foam paired with heavyweight combed cotton ribbed crew socks stamped with WIN WITHIN.',
    details: [
      'Ergonomic arch support footbed',
      'Debossed WNNR bridge logo on slide strap',
      'High-gauge cushioned cotton socks with arch band',
      'Packaged in reusable archival cotton dust bag'
    ],
    fabricCare: 'Wipe slides clean with damp cloth; machine wash socks warm.',
    fitNotes: 'True to European size standard.'
  },

  // =========================================================================
  // MY DRINK FAMILY — HOSPITALITY, BARWARE & SERVING PIECES
  // =========================================================================
  {
    id: 'mdf-crystal-glassware-set',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: 'My Drink Family Master Flint Glass Highball & Coupe Set',
    category: 'Accessories',
    image: '/assets/my-drink-family/collection.webp',
    imageAlt: 'My Drink Family Master Flint Glass Highball and Coupe Set in collection display',
    sizes: ['Set of 4 Glasses'],
    colors: [
      { name: 'Crystal Clear & Gilded Rim', hex: '#D4AF37' }
    ],
    material: 'Lead-Free Heavyweight Crystalline Glass',
    status: 'Production Preview',
    isReserve: true,
    isFeatured: true,
    description: 'Set of four mouth-blown crystalline highballs and coupe glasses engraved with the gilded My Drink Family circular crest for elevated celebratory hospitality.',
    details: [
      'Lead-free heavyweight European crystal glass',
      'Discreet acid-etched circular family crest on base',
      'Refined fine-beveled rim with gilded accent line',
      'Designed for celebratory cocktails and craft beverages'
    ],
    fabricCare: 'Hand wash with warm water and soft cloth recommended.',
    fitNotes: 'Standard cocktail lounge volume: 12oz highball, 8oz coupe.'
  },
  {
    id: 'mdf-gold-barware-kit',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: 'My Drink Family Gilded Cocktail Shaker & Bar Tool Kit',
    category: 'Accessories',
    image: '/assets/my-drink-family/collection.webp',
    imageAlt: 'My Drink Family Gilded Cocktail Shaker and Bar Tool Kit in collection display',
    sizes: ['5-Piece Tool Set'],
    colors: [
      { name: 'Satin Brass Gold', hex: '#C5A869' }
    ],
    material: 'Brushed Brass & Heavyweight Stainless Steel',
    status: 'Production Preview',
    isReserve: true,
    isFeatured: true,
    description: 'Professional five-piece cocktail shaker, precision jigger, hawthorne strainer, weighted bar spoon, and ice tongs finished in brushed satin brass and engraved with the family emblem.',
    details: [
      'Heavyweight 18/8 food-grade stainless steel with brushed brass PVD finish',
      '550ml cobbler shaker with tight silicone seal',
      'Laser-engraved My Drink Family circular crest on shaker cap',
      'Comes in archival wooden storage box with velvet interior'
    ],
    fabricCare: 'Hand wash only; dry immediately with lint-free towel.',
    fitNotes: 'Complete professional barware setup.'
  },

  // =========================================================================
  // MYMOSA SPORTS-FASHION FLAGSHIP
  // =========================================================================
  {
    id: 'mymosa-four-flavor-tracksuits',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Four-Flavor Heavyweight Tracksuit',
    category: 'Sets',
    image: 'assets/products/mymosa/mymosa-four-flavor-tracksuits.webp',
    imageAlt: 'MyMosa four-flavor sports-fashion tracksuits collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: '520 GSM Brushed Loopback Cotton Fleece',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Coordinated zip track jacket and athletic track pant engineered from 520 GSM custom loopback fleece with branded brass zippers, available across all four signature flavor colorways.',
    details: [
      '520 GSM dense loopback fleece with brushed interior',
      'Custom engraved gilded brass two-way zipper',
      'Elasticated track waistband with brass aglets',
      'Direct embroidered MyMosa script on chest and left thigh'
    ],
    fabricCare: 'Machine wash delicate inside-out cold. Hang dry in shade.',
    fitNotes: 'Relaxed athletic silhouette with articulated knees.'
  },
  {
    id: 'mymosa-four-flavor-heavyweight-sweats',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Coordinated Crew & Sweatpant Set',
    category: 'Sets',
    image: 'assets/products/mymosa/mymosa-four-flavor-heavyweight-sweats.webp',
    imageAlt: 'MyMosa heavyweight sweats and hoodies collection in Classic Orange, Pineapple, Strawberry, and Watermelon colorways',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: '460 GSM Organic Cotton Fleece',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Substantial two-piece leisure sweat set featuring drop-shoulder crewneck and tapered cuffed sweatpants in four flavor colorways.',
    details: [
      '460 GSM organic combed cotton loopback fleece',
      'Ribbed triangle neck gusset and side panels',
      'Deep jersey-lined pockets with reinforced bar-tacks',
      'Tonal embroidered flavor identity emblems'
    ],
    fabricCare: 'Gentle wash cold with mild detergent. Flat dry.',
    fitNotes: 'Comfortable relaxed fit with gentle taper at ankle.'
  },
  {
    id: 'mymosa-hoodies-four-flavors',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Flagship Heavyweight Pullover Hoodie',
    category: 'Tops',
    image: 'assets/products/mymosa/mymosa-hoodies-four-flavors.webp',
    imageAlt: 'MyMosa heavyweight loopback fleece hoodies in Classic Orange, Pineapple, Strawberry, and Watermelon colorways',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: '480 GSM Heavy French Terry',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Architectural pullover hoodie featuring double-layered hood without drawcords for clean structure, kangaroo pouch, and tonal embroidery.',
    details: [
      '480 GSM heavy loopback French terry',
      'Seamless double-walled structured hood',
      'Discreet tone-on-tone MyMosa chest seal',
      'Heavy rib cuffs and bottom hem band'
    ],
    fabricCare: 'Machine wash cold delicate. Reshape and flat dry.',
    fitNotes: 'Boxy contemporary drop-shoulder cut.'
  },
  {
    id: 'mymosa-tshirts-four-flavors',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Four-Flavor Heavyweight Boxy Tee',
    category: 'Tops',
    image: 'assets/products/mymosa/mymosa-tshirts-four-flavors.webp',
    imageAlt: 'MyMosa heavyweight combed cotton T-shirts displayed in four flagship colorways: Classic Orange, Pineapple, Strawberry, and Watermelon',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: '280 GSM Mercerized Combed Jersey',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: false,
    description: 'Custom-milled heavyweight combed jersey tee with high-rib collar and blind stitch hem, available in all four flagship colorways.',
    details: [
      '280 GSM premium long-staple cotton jersey',
      '1-inch bound rib crew collar that retains shape',
      'Blind-stitched sleeve openings and bottom hem',
      'Silicone heat-pressed rear neck logo'
    ],
    fabricCare: 'Machine wash cold inside-out, tumble dry low.',
    fitNotes: 'Generous boxy cut with drop shoulder.'
  },
  {
    id: 'mymosa-athletic-shorts',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Athletic Court Shorts',
    category: 'Bottoms',
    image: 'assets/products/mymosa/mymosa-athletic-shorts.webp',
    imageAlt: 'MyMosa athletic court and training shorts in four flagship flavor colorways',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: '380 GSM Loopback Terry with Breathable Mesh Lining',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: false,
    description: 'Athletic court shorts featuring deep side welt pockets, concealed zip coin pocket, and elongated braided drawcords.',
    details: [
      '380 GSM breathable loopback terry',
      'Encased elastic waistband with braided drawcords and brass tips',
      '7-inch inseam tailored for mobility',
      'Concealed waterproof zip pocket on right hip'
    ],
    fabricCare: 'Cold wash gentle cycle. Air dry.',
    fitNotes: 'Above-the-knee athletic length.'
  },
  {
    id: 'mymosa-hats-beanies-visors',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Headwear Assortment (Cap, Beanie & Visor)',
    category: 'Accessories',
    image: 'assets/products/mymosa/mymosa-hats-beanies-visors.webp',
    imageAlt: 'MyMosa athletic headwear collection featuring six-panel caps, ribbed beanies, and sports visors in four signature flavor colorways',
    sizes: ['One Size Adjustable'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: 'Garment-Washed Cotton Twill & Merino Rib Knit',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Structured six-panel baseball cap, ribbed cuff merino beanie, and athletic court visor bearing embroidered MyMosa crest insignia.',
    details: [
      '100% garment-washed heavyweight cotton twill on caps',
      'Double-layer extrafine merino wool on beanies',
      'Embroidered 3D puff MyMosa crest insignia',
      'Antique brass buckle strap closure'
    ],
    fabricCare: 'Spot clean caps; hand wash beanies in cold water.',
    fitNotes: 'Unisex fit with versatile adjustment range.'
  },
  {
    id: 'mymosa-slides-socks',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Recovery Slide & Cushioned Sock Set',
    category: 'Accessories',
    image: 'assets/products/mymosa/mymosa-slides-socks.webp',
    imageAlt: 'MyMosa athletic slides and cushioned crew socks featuring branded insignia in four flavor colorways',
    sizes: ['38-39', '40-41', '42-43', '44-45'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: 'Dual-Density EVA Foam & Combed Cotton Rib',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: false,
    description: 'Ergonomic recovery slide with textured footbed paired with arch-band cushioned crew socks in coordinated flavor palettes.',
    details: [
      'Dual-density molded EVA foam footbed with arch cradle',
      'Embossed tonal MyMosa brand strap',
      'Heavyweight combed cotton crew socks with compression arch',
      'Packaged in reusable branded canvas storage bag'
    ],
    fabricCare: 'Wipe slides with damp cloth; machine wash socks warm.',
    fitNotes: 'Standard European sizing.'
  },
  {
    id: 'mymosa-gym-travel-bags',
    brandId: 'mymosa',
    brandName: 'MyMosa',
    name: 'MyMosa Gym Holdall & Travel Duffel Bag',
    category: 'Accessories',
    image: 'assets/products/mymosa/mymosa-gym-travel-bags.webp',
    imageAlt: 'MyMosa sports carry collection including gym duffels, weekenders, and crossbody bags in four flavor colorways',
    sizes: ['One Size (45L)'],
    colors: [
      { name: 'Classic Orange', hex: '#E26D35' },
      { name: 'Pineapple', hex: '#E5A93C' },
      { name: 'Strawberry', hex: '#D93848' },
      { name: 'Watermelon', hex: '#317F55' }
    ],
    material: '24oz Water-Repellent Duck Canvas & Bridle Leather',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Spacious athletic travel holdall featuring separate ventilated sneaker pocket, water-repellent zipper, and detachable padded shoulder strap.',
    details: [
      '24oz water-resistant coated cotton duck canvas',
      'Isolated side ventilated shoe and gear compartment',
      'Full-grain leather handle wrap and zip pulls',
      'TSA cabin luggage approved dimensions'
    ],
    fabricCare: 'Spot clean canvas; treat leather with leather balm.',
    fitNotes: '45-liter weekend capacity.'
  },

  // =========================================================================
  // MYTAI SPORTS-FASHION
  // =========================================================================
  {
    id: 'mytai-apparel-collection',
    brandId: 'mytai',
    brandName: 'MyTai',
    name: 'MyTai Island Athletic Apparel Suite',
    category: 'Sets',
    image: 'assets/products/mytai/mytai-apparel-products.webp',
    imageAlt: 'MyTai island-inspired sports-fashion apparel collection featuring T-shirts, hoodies, track jackets, and sweatpants in black, ivory, teal, coral, and restrained gold',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Island Teal', hex: '#2A7B88' },
      { name: 'Sunset Coral', hex: '#E06D53' },
      { name: 'Raw Ivory', hex: '#F4F0E6' },
      { name: 'Volcanic Black', hex: '#121516' }
    ],
    material: '480 GSM Loopback French Terry & Combed Cotton',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Island-inspired athletic collection balancing coastal leisure and court mobility in volcanic black, raw ivory, deep teal, and coral.',
    details: [
      'Complete suite: Track jacket, pullover hoodie, heavyweight tee, and sweatpants',
      'Contrast piping and gilded zipper pullers',
      'Gilded MyTai sunburst crest embroidery',
      'Breathable double-face knit construction'
    ],
    fabricCare: 'Machine wash cold inside-out. Hang dry in shade.',
    fitNotes: 'Relaxed athletic drape.'
  },
  {
    id: 'mytai-accessories-collection',
    brandId: 'mytai',
    brandName: 'MyTai',
    name: 'MyTai Coastal Carry & Court Accessories Suite',
    category: 'Accessories',
    image: 'assets/products/mytai/mytai-accessories-products.webp',
    imageAlt: 'MyTai accessories collection featuring caps, beanies, visors, crew socks, slides, duffel bags, and belt bags in teal, coral, ivory, and black',
    sizes: ['One Size'],
    colors: [
      { name: 'Island Teal', hex: '#2A7B88' },
      { name: 'Sunset Coral', hex: '#E06D53' },
      { name: 'Raw Ivory', hex: '#F4F0E6' },
      { name: 'Volcanic Black', hex: '#121516' }
    ],
    material: 'Ballistic Canvas, Washed Cotton Twill & Molded EVA',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Comprehensive sports-fashion accessories suite featuring athletic caps, visors, cushioned crew socks, recovery slides, and travel holdalls.',
    details: [
      'Caps, visors, and ribbed beanies in signature island palette',
      'Dual-density recovery slides with contoured footbed',
      'Heavy-duty travel duffel and modular crossbody belt bag',
      'Breathable terry sport socks with arch support'
    ],
    fabricCare: 'Spot clean accessories.',
    fitNotes: 'Universal adjustable fit.'
  },

  // =========================================================================
  // MYTINI SPORTS-FASHION
  // =========================================================================
  {
    id: 'mytini-apparel-collection',
    brandId: 'mytini',
    brandName: 'MyTini',
    name: 'MyTini Nocturnal Lounge Athletic Suite',
    category: 'Sets',
    image: 'assets/products/mytini/mytini-apparel-products.webp',
    imageAlt: 'MyTini nocturnal lounge sports-fashion apparel collection featuring T-shirts, hoodies, and tailored warmups in black, espresso, ivory, and restrained gold',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Midnight Black', hex: '#0E1011' },
      { name: 'Roast Espresso', hex: '#382B24' },
      { name: 'Warm Ivory', hex: '#F5F2EA' }
    ],
    material: '500 GSM Heavy French Terry & Mercerized Cotton',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Sleek monochromatic athletic silhouettes engineered for evening lounges, private clubrooms, and late-night movement.',
    details: [
      'Monochromatic tees, minimalist hoodies, and tailored warmups',
      'Custom matte black and restrained gold hardware accents',
      'Micro-embroidered cocktail stem silhouette insignia',
      'Heavyweight mercerized cotton with liquid drape'
    ],
    fabricCare: 'Dry clean recommended or delicate cold wash.',
    fitNotes: 'Tailored modern lounge silhouette.'
  },
  {
    id: 'mytini-accessories-collection',
    brandId: 'mytini',
    brandName: 'MyTini',
    name: 'MyTini Nocturnal Travel & Lounge Accessories Suite',
    category: 'Accessories',
    image: 'assets/products/mytini/mytini-accessories-products.webp',
    imageAlt: 'MyTini accessories collection featuring structured caps, beanies, socks, slides, weekender duffels, and belt bags in black, espresso, ivory, and restrained gold',
    sizes: ['One Size'],
    colors: [
      { name: 'Midnight Black', hex: '#0E1011' },
      { name: 'Roast Espresso', hex: '#382B24' },
      { name: 'Warm Ivory', hex: '#F5F2EA' }
    ],
    material: 'Reinforced Coated Canvas & Full-Grain Leather',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Minimalist carry accessories including structured ball caps, ribbed merino beanies, leather-trimmed weekenders, and recovery slides.',
    details: [
      'Structured six-panel caps and double-layer knit beanies',
      'Architectural weekender duffel with leather base trim',
      'Ergonomic matte black recovery slides',
      'High-gauge combed cotton lounge socks'
    ],
    fabricCare: 'Professional leather and canvas specialist care.',
    fitNotes: 'Unisex sizing.'
  },

  // =========================================================================
  // MYJITO SPORTS-FASHION (NEVER MOJITO)
  // =========================================================================
  {
    id: 'myjito-apparel-collection',
    brandId: 'myjito',
    brandName: 'MyJito',
    name: 'MyJito Botanical Court Athletic Suite',
    category: 'Sets',
    image: 'assets/products/myjito/myjito-apparel-products.webp',
    imageAlt: 'MyJito mint and navy sports-fashion apparel collection featuring T-shirts, hoodies, a track jacket, and sweatpants in botanical mint, deep navy, lime, ivory, and gold',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Botanical Mint', hex: '#2D7F67' },
      { name: 'Deep Navy', hex: '#13213B' },
      { name: 'Fresh Lime', hex: '#85B832' },
      { name: 'Raw Ivory', hex: '#F4F6F2' }
    ],
    material: '480 GSM Loopback Terry & Breathable Combed Cotton',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Energized athletic apparel collection inspired by botanical mint and citrus rituals, crafted for outdoor courts and vibrant warmups.',
    details: [
      'Mint and navy track jackets, hoodies, tees, and athletic joggers',
      'High-density embroidery and fresh lime piping details',
      'Engineered ventilation panels in track jackets',
      'Custom dipped drawcords with gold aglets'
    ],
    fabricCare: 'Machine wash delicate cold. Hang dry.',
    fitNotes: 'Athletic tailored fit designed for active movement.'
  },
  {
    id: 'myjito-accessories-collection',
    brandId: 'myjito',
    brandName: 'MyJito',
    name: 'MyJito Court Carry & Athletic Accessories Suite',
    category: 'Accessories',
    image: 'assets/products/myjito/myjito-accessories-products.webp',
    imageAlt: 'MyJito accessories collection featuring dual-tone caps, athletic visors, technical crew socks, slides, and gym travel bags in mint, navy, lime, and ivory',
    sizes: ['One Size'],
    colors: [
      { name: 'Botanical Mint', hex: '#2D7F67' },
      { name: 'Deep Navy', hex: '#13213B' },
      { name: 'Fresh Lime', hex: '#85B832' },
      { name: 'Raw Ivory', hex: '#F4F6F2' }
    ],
    material: 'Water-Resistant Technical Canvas & Pima Cotton',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Dual-tone athletic caps, court visors, cushioned athletic crew socks, slides, and ventilated training gym sacks.',
    details: [
      'Dual-tone court caps and open-top tennis visors',
      'Molded recovery slides with textured footbed',
      'Ventilated gym travel duffel with moisture-wicking lining',
      'Cushioned athletic crew socks with rib compression'
    ],
    fabricCare: 'Spot clean headwear and bags; wash socks cold.',
    fitNotes: 'Standard adjustable unisex sizing.'
  },

  // =========================================================================
  // MYGARITA SPORTS-FASHION (NEVER MARGARITA)
  // =========================================================================
  {
    id: 'mygarita-apparel-collection',
    brandId: 'mygarita',
    brandName: 'MyGarita',
    name: 'MyGarita Agave Horizon Athletic Apparel Suite',
    category: 'Sets',
    image: 'assets/products/mygarita/mygarita-apparel-products.webp',
    imageAlt: 'MyGarita agave sage and warm sand sports-fashion apparel collection featuring hoodies, track jackets, tees, and sweatpants in agave sage, sand, cream, black, and gold',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    colors: [
      { name: 'Agave Sage', hex: '#7A8C74' },
      { name: 'Warm Sand', hex: '#C9B18F' },
      { name: 'Pueblo Cream', hex: '#F8F5ED' },
      { name: 'Obsidian Black', hex: '#161817' }
    ],
    material: '460 GSM Heavy Organic Fleece & Stone-Washed Jersey',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Southwestern-inspired sports-fashion apparel in tranquil agave sage, warm sand, and cream, designed for effortless all-day movement.',
    details: [
      'Agave sage and sand fleece hoodies, track jackets, and easy tees',
      'Stone-washed finish for soft weathered tactile hand',
      'Antique brass zipper hardware and embroidered agave insignias',
      'Gently tapered sweatpants with reinforced gussets'
    ],
    fabricCare: 'Machine wash cold with like colors. Tumble dry low.',
    fitNotes: 'Relaxed southwestern lounge fit.'
  },
  {
    id: 'mygarita-accessories-collection',
    brandId: 'mygarita',
    brandName: 'MyGarita',
    name: 'MyGarita Desert Carry & Headwear Accessories Suite',
    category: 'Accessories',
    image: 'assets/products/mygarita/mygarita-accessories-products.webp',
    imageAlt: 'MyGarita accessories collection featuring washed caps, beanies, visors, crew socks, slides, and travel duffel bags in agave sage, warm sand, and cream',
    sizes: ['One Size'],
    colors: [
      { name: 'Agave Sage', hex: '#7A8C74' },
      { name: 'Warm Sand', hex: '#C9B18F' },
      { name: 'Pueblo Cream', hex: '#F8F5ED' }
    ],
    material: 'Washed Cotton Twill, Ribbed Wool & Molded EVA',
    status: 'Production Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Washed twill caps, bucket hats, ribbed beanies, recovery slides, and travel duffels reflecting desert sunset warmth.',
    details: [
      'Washed twill unstructured caps and bucket hats',
      'Heavyweight ribbed merino knit beanies',
      'Molded EVA slides in desert stone hues',
      'Heavy canvas travel holdall with brass hardware'
    ],
    fabricCare: 'Spot clean bags and hats.',
    fitNotes: 'Unisex one-size adjustable.'
  },

  // =========================================================================
  // LIFESTYLE ACCESSORY COLLECTIONS (9 APPROVED HOUSES)
  // =========================================================================
  {
    id: 'ikla-bedroom-suite',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: 'IKLA Maison Bedroom Collection Suite',
    category: 'Accessories',
    image: 'assets/accessories/ikla-maison/ikla-maison-bedroom-collection.webp',
    imageAlt: 'IKLA Maison bedroom collection featuring bedding, pillows, throws, slippers, a sleep mask, candle, and leather valet tray.',
    sizes: ['Full / Queen', 'King / Cal King'],
    colors: [
      { name: 'Limestone Cream', hex: '#F0ECE1' },
      { name: 'Warm Travertine', hex: '#DCD4C5' },
      { name: 'Obsidian Black', hex: '#141414' }
    ],
    material: '300 TC Washed Egyptian Cotton, Double-Faced Cashmere & Calfskin',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Private rituals, considered materials, and quiet comfort—an extension of IKLA Maison beyond the wardrobe.',
    details: [
      'Bedding, pillows, throws, slippers, sleep masks, candles, valet trays',
      '300-thread-count washed Egyptian cotton sateen bedding with discreet tonal embroidery',
      'Double-faced cashmere jacquard accent throws in warm limestone tones',
      'Molded calfskin and shearling residential slippers with brass monogram hardware'
    ],
    fabricCare: 'Specialist laundering for bedding; dry clean cashmere throws.',
    fitNotes: 'Standard residential bed and unisex slipper sizing.'
  },
  {
    id: 'ikla-bath-spa-suite',
    brandId: 'ikla-maison',
    brandName: 'IKLA Maison',
    name: 'IKLA Maison Bath & Spa Collection Suite',
    category: 'Accessories',
    image: 'assets/accessories/ikla-maison/ikla-maison-bath-spa-collection.webp',
    imageAlt: 'IKLA Maison bath and spa collection featuring plush towels, waffle robes, bath mats, slippers, ceramic vanity vessels, and leather toiletry cases.',
    sizes: ['S/M', 'L/XL'],
    colors: [
      { name: 'Alabaster White', hex: '#F7F6F2' },
      { name: 'Sandstone Grey', hex: '#C2BBB0' }
    ],
    material: '750 GSM Zero-Twist Aegean Cotton, Honeycomb Waffle & French Calfskin',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Plush towels, textured robes, ceramic vanity vessels, and calfskin toiletry cases designed for daily restorative ceremonies.',
    details: [
      'Towels, robes, bath mats, bath slippers, vanity vessels, toiletry cases, grooming accessories',
      '750 GSM ultra-dense zero-twist Aegean cotton bath sheets',
      'Textured honeycomb waffle spa robes with tonal gilded bullion chest insignia',
      'Hand-turned matte ceramic vanity canisters with brushed brass lids'
    ],
    fabricCare: 'Machine wash warm with mild detergent; tumble dry low.',
    fitNotes: 'Generous spa kimono cut.'
  },
  {
    id: 'mdf-glassware-barware-suite',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: 'My Drink Family Glassware & Barware Hospitality Suite',
    category: 'Accessories',
    image: 'assets/accessories/my-drink-family/my-drink-family-glassware-barware.webp',
    imageAlt: 'My Drink Family glassware and barware suite featuring crystal coupes, champagne flutes, rocks glasses, cocktail shaker, jigger, strainer, and gold serving tray.',
    sizes: ['Complete Set'],
    colors: [
      { name: 'Clear Crystal', hex: '#F0F4F8' },
      { name: 'Brushed Gold', hex: '#D4AF37' }
    ],
    material: 'Lead-Free European Crystalline & Brushed Brass 18/10 Stainless Steel',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Objects designed for gathering—across the bar, beside the pool, and throughout the seventeen-house hospitality universe.',
    details: [
      'Champagne flutes, coupes, wine goblets, rocks glasses, shakers, jiggers, strainers, ice buckets, serving trays',
      'Lead-free crystalline stemware blown with architectural faceted bowls',
      'Double-walled 18/10 stainless steel shaker and jigger set in brushed brass',
      'Solid brass mirror-polished rectangular serving plinth'
    ],
    fabricCare: 'Hand wash recommended for fine crystalline; polish brass with soft microfiber.',
    fitNotes: 'Standard hospitality specifications.'
  },
  {
    id: 'mdf-poolside-hospitality-suite',
    brandId: 'my-drink-family',
    brandName: 'My Drink Family',
    name: 'My Drink Family Poolside Hospitality Suite',
    category: 'Accessories',
    image: 'assets/accessories/my-drink-family/my-drink-family-poolside-hospitality.webp',
    imageAlt: 'My Drink Family poolside hospitality collection featuring floating bar stations, luxury pool floats, beach towels, tumblers, and outdoor entertaining pieces.',
    sizes: ['Complete Suite'],
    colors: [
      { name: 'Resort Ivory', hex: '#FAF8F3' },
      { name: 'Club Navy', hex: '#16233B' },
      { name: 'Warm Gold', hex: '#D4AF37' }
    ],
    material: 'Marine-Grade PVC, 600 GSM Jacquard Cotton & Double-Walled Steel',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Floating serving stations, resort pool floats, cabana towels, and outdoor entertaining pieces for elevated poolside gatherings.',
    details: [
      'Floating serving stations, resort floats, beach balls, towels, coolers, tumblers, serving caddies',
      'Marine-grade floating service plinth with recessed beverage holders',
      '600 GSM jacquard woven cabana beach towels',
      'Double-vacuum insulated stainless steel tumblers with splashproof lids'
    ],
    fabricCare: 'Rinse with fresh water after pool or saltwater use; store dry.',
    fitNotes: 'Full-size resort specifications.'
  },
  {
    id: 'ktse-training-carry-suite',
    brandId: 'ktse',
    brandName: 'KTSE',
    name: 'KTSE Training & Everyday Carry Suite',
    category: 'Accessories',
    image: 'assets/accessories/ktse/ktse-training-everyday-carry.webp',
    imageAlt: 'KTSE training and everyday carry collection featuring heavyweight training duffels, technical backpacks, exercise mats, insulated bottles, lifting straps, and performance accessories.',
    sizes: ['One Size'],
    colors: [
      { name: 'Obsidian Black', hex: '#141414' },
      { name: 'Raw Concrete', hex: '#8C8C88' }
    ],
    material: '1680D Ballistic Nylon, 5mm Natural Rubber & Heavy Cotton Webbing',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Purpose-built objects for training, movement, recovery, and the discipline between sessions. Built Different. Made Consistent.',
    details: [
      'Training duffels, technical backpacks, exercise mats, insulated bottles, wrist wraps, lifting straps, resistance bands, crew socks, slides',
      '1680D ballistic waterproof nylon duffels with ventilated footwear compartment',
      'High-density non-slip natural rubber 5mm training mats',
      'Ergonomic textured recovery slides with contoured arch support'
    ],
    fabricCare: 'Spot clean bags and mats with damp cloth; machine wash socks cold.',
    fitNotes: 'Universal training dimensions.'
  },
  {
    id: 'moteon-resort-travel-suite',
    brandId: 'moteon',
    brandName: 'Motéon',
    name: 'Motéon Resort & Travel Collection Suite',
    category: 'Accessories',
    image: 'assets/accessories/moteon/moteon-resort-travel-collection.webp',
    imageAlt: 'Motéon resort and travel collection featuring weekender luggage, carryall totes, leather toiletry cases, passport wallets, designer sunglasses, and leisure accessories.',
    sizes: ['One Size'],
    colors: [
      { name: 'Terracotta Clay', hex: '#A85741' },
      { name: 'Sandstone Natural', hex: '#DED5C5' },
      { name: 'Riviera Navy', hex: '#1F2A38' }
    ],
    material: 'Heavy Water-Repellent Cotton Canvas, Bridle Saddle Leather & Italian Acetate',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'A considered travel system shaped for resort mornings, coastal afternoons, and movement without interruption.',
    details: [
      'Weekender bags, carryall totes, toiletry cases, passport wallets, sunglasses, silk scarves, visors, slides, travel socks, pool towels',
      'Structured water-repellent canvas weekenders with saddle leather reinforced handles',
      'Italian acetate handcrafted sunglasses with Category 3 UV gradient optics',
      'Pure silk twill foulards with hand-rolled hems in sun-baked Mediterranean hues'
    ],
    fabricCare: 'Condition leather handles yearly; dry clean silk twill.',
    fitNotes: 'IATA airline carry-on compliant.'
  },
  {
    id: 'moral-compass-leather-suite',
    brandId: 'moral-compass',
    brandName: 'Moral Compass',
    name: 'Moral Compass Executive Leather Goods Suite',
    category: 'Accessories',
    image: 'assets/accessories/moral-compass/moral-compass-executive-leather.webp',
    imageAlt: 'Moral Compass executive leather goods collection featuring architectural briefcases, document portfolios, leather journals, card holders, watch rolls, and refined brass keepsakes.',
    sizes: ['One Size'],
    colors: [
      { name: 'Sovereign Black', hex: '#0F1110' },
      { name: 'Deep Espresso', hex: '#2C1D16' },
      { name: 'Aged Brass', hex: '#B89758' }
    ],
    material: 'Full-Grain French Boxcalf, Bridle Leather & Machined Solid Brass',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Quietly constructed instruments for those who move with intention and answer to an internal standard.',
    details: [
      'Briefcases, document portfolios, leather journals, fountain pens, card holders, wallets, passport covers, key cases, watch rolls, belts, gloves',
      'Hand-stitched full-grain French calfskin briefcases with brass tuck locks',
      'Archival parchment refillable journals bound in burnished bridle leather',
      'Machined solid brass compass paperweight with cardinal coordinate engravings'
    ],
    fabricCare: 'Treat periodically with beeswax leather balm; polish solid brass with soft cloth.',
    fitNotes: 'Architectural executive proportions.'
  },
  {
    id: 'wnnr-travel-suite',
    brandId: 'wnnr',
    brandName: 'WNNR',
    name: 'WNNR Executive Travel & Carry Suite',
    category: 'Accessories',
    image: 'assets/accessories/wnnr/wnnr-executive-travel.webp',
    imageAlt: 'WNNR executive travel and everyday-carry collection featuring obsidian leather totes, weekender duffels, executive backpacks, headwear, card holders, and discipline travel accessories.',
    sizes: ['One Size'],
    colors: [
      { name: 'Obsidian Black', hex: '#0D0F0E' },
      { name: 'Deep Forest', hex: '#1B2E24' },
      { name: 'Restrained Gold', hex: '#C5A869' }
    ],
    material: 'Obsidian Pebble Leather, 1000D Cordura & Champagne Gold Alloy',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Executive travel and everyday-carry objects built around discipline, readiness, and the victory that begins within. WIN WITHIN.',
    details: [
      'Leather totes, weekenders, executive backpacks, caps, beanies, belts, wallets, card holders, passport covers, watch rolls, shoe bags',
      'Obsidian pebble-grain leather weekender with champagne gold zippers and luggage strap',
      'Structured technical executive backpack with padded laptop and device compartments',
      'Full-grain leather passport travel organizer with RFID-blocking inner lining'
    ],
    fabricCare: 'Spot clean with specialized leather foam; wipe nylon with warm damp cloth.',
    fitNotes: 'Compliant with transcontinental overhead compartments.'
  },
  {
    id: 'ikla-water-hydration-suite',
    brandId: 'ikla-water',
    brandName: 'IKLA Water',
    name: 'IKLA Water Hydration & Table Service Suite',
    category: 'Accessories',
    image: 'assets/accessories/ikla-water/ikla-water-hydration-service.webp',
    imageAlt: 'IKLA Water hydration and table service collection featuring minimalist glass carafes, water tumblers, reusable glass travel bottles, ice buckets, coaster sets, and serving trays.',
    sizes: ['Table Set'],
    colors: [
      { name: 'Flint Glass Clear', hex: '#E8F1F5' },
      { name: 'Travertine Stone', hex: '#D8D1C2' },
      { name: 'Alpine Glacier', hex: '#5E8896' }
    ],
    material: 'Heavyweight Reusable Flint Glass, Travertine Stone & Canvas Cooler',
    status: 'Collection Preview',
    isReserve: true,
    isNew: true,
    isFeatured: true,
    description: 'Hydration expressed through considered vessels, refined table service, and objects designed for everyday ceremony.',
    details: [
      'Glass carafes, water tumblers, insulated bottles, reusable glass travel bottles, ice buckets, tongs, coaster sets, bottle carriers, picnic coolers, serving trays',
      'Hand-blown architectural flint glass water carafes with silicone-sealed glass stoppers',
      'Fine-rimmed crystalline mineral water tumblers designed for formal dinner settings',
      'Honed natural travertine stone coaster sets with non-scratch protective backing'
    ],
    fabricCare: 'Dishwasher safe flint glassware; clean travertine coasters with neutral stone soap.',
    fitNotes: 'Designed for residential dining and conference tables.'
  }
];

PRODUCTS.forEach(product => {
  if (product.image) {
    product.image = getAssetPath(product.image);
  }
});

export const CATEGORIES = ['All', 'Outerwear', 'Tops', 'Bottoms', 'Sets', 'Accessories'];

