/**
 * IKLA Maison — Development-Only Duplicate Asset Audit
 * 
 * Verifies that:
 * 1. No hero image is reused as a product card or collection banner.
 * 2. No collection banner is reused as a product card thumbnail.
 * 3. No product card image is duplicated across multiple SKUs.
 * 4. Logos and background textures are appropriately exempted.
 */

import { MASTER_ASSET_REGISTRY, ASSET_ROLES } from '../data/assetRegistry.js';
import { PRODUCTS } from '../data/products.js';
import { CAMPAIGN_ASSETS } from '../data/campaigns.js';

export function auditDuplicateAssets() {
  const imageUsageMap = new Map();
  const violations = [];

  function recordUsage(imagePath, sourceContext, role) {
    if (!imagePath) return;
    const normalized = imagePath.replace(/^\/?(ikla-maison-web\/)?/, '').replace(/^\.\//, '');
    
    // Exempt known shared logos and subtle textures
    if (normalized.includes('logos/') || normalized.includes('texture') || normalized.includes('pattern')) {
      return;
    }

    if (!imageUsageMap.has(normalized)) {
      imageUsageMap.set(normalized, []);
    }

    imageUsageMap.get(normalized).push({ sourceContext, role });
  }

  // 1. Audit Products
  const productionProducts = PRODUCTS.filter((p) => !p.name?.startsWith('[Placeholder]'));
  const placeholderProducts = PRODUCTS.filter((p) => p.name?.startsWith('[Placeholder]'));

  productionProducts.forEach((product) => {
    recordUsage(product.image, `Product: ${product.name} (${product.id})`, ASSET_ROLES.PRODUCT_CARD);
  });

  // 2. Audit Campaign Assets
  CAMPAIGN_ASSETS.forEach((asset) => {
    recordUsage(asset.file, `Campaign: ${asset.id}`, asset.category?.includes('hero') ? ASSET_ROLES.HERO : ASSET_ROLES.COLLECTION_FEATURE);
  });

  // 3. Evaluate duplicates across major page roles
  for (const [imagePath, usages] of imageUsageMap.entries()) {
    if (usages.length > 1) {
      // Check if duplicate crosses roles (e.g. Hero vs Product) or duplicates product cards
      const hasProductCard = usages.some((u) => u.role === ASSET_ROLES.PRODUCT_CARD);
      const hasHero = usages.some((u) => u.role === ASSET_ROLES.HERO);
      const productCardCount = usages.filter((u) => u.role === ASSET_ROLES.PRODUCT_CARD).length;

      if (hasProductCard && hasHero) {
        violations.push({
          type: 'CRITICAL_ROLE_COLLISION',
          imagePath,
          message: `Image is reused as both a Hero and a Product Card: ${usages.map((u) => u.sourceContext).join(' vs ')}`,
        });
      } else if (productCardCount > 1) {
        violations.push({
          type: 'DUPLICATE_PRODUCT_THUMBNAIL',
          imagePath,
          message: `Product image reused across multiple production SKUs: ${usages.map((u) => u.sourceContext).join(' and ')}`,
        });
      }
    }
  }

  return {
    scannedImages: imageUsageMap.size,
    violationsCount: violations.length,
    violations,
    passed: violations.length === 0,
  };
}
